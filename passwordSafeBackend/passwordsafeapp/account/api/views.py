from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

from .serializers import RegisterSerializer, GetUpdateUsersSerializer, LoginSerializer
from ..models import User

def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return ({
        'refresh': str(refresh),
        'access': str(refresh.access_token)
    })


class RegisterViews(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'user created!', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class LoginViews(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # if serializer.is_valid():
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        user = authenticate(email=email, password=password)

        if user is not None:
            token = get_token_for_user(user)
            return Response({'message': 'everything is fine!', 'token': token}, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'user not found!'}, status=status.HTTP_404_NOT_FOUND)
        # else:
        #     return Response({'message': 'there is problem!', 'errors': serializer.errors}, status=status.HTTP_404_NOT_FOUND)


class GetUpdateUserViews(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, **kwargs):
        try:
            try:
                user = User.objects.get(id=kwargs['pk'])
            except User.DoesNotExist:
                return Response({'message': 'user not found'}, status=status.HTTP_404_NOT_FOUND)
            serializer = GetUpdateUsersSerializer(user)
            return Response({'message': 'user exists', 'data': serializer.data}, status=status.HTTP_200_OK)
        except:
            return Response({'message': 'there is problem'}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, **kwargs):
        try:
            try:
                user = User.objects.get(id=kwargs['pk'])
            except User.DoesNotExist:
                return Response({'message': 'user Not found!'}, status=status.HTTP_404_NOT_FOUND)

            serializer = GetUpdateUsersSerializer(user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'user updated'}, status=status.HTTP_202_ACCEPTED)
            else:
                return Response({'message': 'there is probleme!', 'error': serializer.errors}, status=status.HTTP_404_NOT_FOUND)
        except:
            return Response({'message': 'id parameter is required'}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            user = User.objects.get(id=pk)
        except User.DoesNotExist:
            return Response({'message': 'user not found!'}, status=status.HTTP_404_NOT_FOUND)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)