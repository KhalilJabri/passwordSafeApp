from rest_framework import serializers
from datetime import datetime

from ..models import Account

class PUAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        exclude = ["copied_at"]

class AccountSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = Account
        fields = '__all__'
        # exclude = ['id']
        # extra_kwargs = {
        #     'id': {'write_only': True}
        # }

class CopiedTimeAccountSerialzer(serializers.ModelSerializer):
    copied_at = serializers.DateTimeField()
    class Meta:
        model = Account
        fields = ['copied_at']
    def update(self, instance, validated_data):
        # if instance.copied_at == datetime.now():
        #     print('kkkkk')
        #     print(validated_data.get('copied_at', instance.copied_at))
        #     instance.copied_at = validated_data.get('copied_at', instance.copied_at)
        # else:
        #     print('zzzzzzzz')
        print(validated_data.get('copied_at', instance.copied_at))
        instance.copied_at = datetime.now()
        instance.save()
        return instance