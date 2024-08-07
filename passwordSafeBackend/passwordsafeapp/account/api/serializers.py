from rest_framework import serializers
import re

from ..models import User
from mngaccount.api.serializers import AccountSerializer

class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['email', 'name', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        if len(attrs['email']) == 0 or len(attrs['name']) == 0 or len(attrs['password']) == 0:
            return serializers.ValidationError({'error': 'fields should not be empty!!'})

        if not re.match(r"^[\w\.-]+@[\w\.-]+\.\w+$", attrs['email']):
            raise serializers.ValidationError({'error': 'Invalid email format'})

        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    # def save(self):
    #     password = self.validated_data['password']
    #     password2 = self.validated_data['password2']
    #     if password != password2:
    #         raise serializers.ValidationError({'error'": Passwords should be the same!"})
    #
    #     if User.objects.filter(email=self.validated_data['email']).exists():
    #         raise serializers.ValidationError({'error': 'email already exists!'})
    #
    #     account = User(email=self.validated_data['email'],
    #                    name=self.validated_data['name'])
    #     account.set_password(password)
    #     account.save()
    #     return account

class UpdateUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'numero']
        extra_kwargs = {
            'id': {'read_only': True}
        }

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.name = validated_data.get('name', instance.name)
        instance.numero = validated_data.get('numero', instance.numero)
        instance.save()
        return instance

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ['email', 'password']

class GetUsersWithDataSerializer(serializers.ModelSerializer):
    accounts = AccountSerializer(many=True, read_only=True)
    picture = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = User
        fields = ['email', 'name', 'numero', 'picture', 'accounts']

class ResetPasswordSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['id', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }