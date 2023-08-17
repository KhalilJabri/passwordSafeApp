from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from datetime import datetime

from ..models import Account
from .serializers import PUAccountSerializer, AccountSerializer, CopiedTimeAccountSerialzer


class PAccountViews(APIView):
    def post(self, request, format=None):
        serializer = PUAccountSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response({'message': "account saved", 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'message': "check your data!", 'error': serializer.errors}, status=status.HTTP_404_NOT_FOUND)

class GUDAccountViews(APIView):
    def get(self, request, pk):
        try:
            try:
                account = Account.objects.get(id=pk)
            except:
                return Response({'mesage': 'user not found!'}, status=status.HTTP_404_NOT_FOUND)
            serializer = AccountSerializer(account)
            return Response({'message': 'account found it', 'data': serializer.data}, status=status.HTTP_200_OK)
        except:
            return Response({'mesage': 'there is probleme anywhere!'}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            try:
                account = Account.objets.get(id=pk)
            except:
                return Response({'message': 'user not found'}, status=status.HTTP_404_NOT_FOUND)
            serializer = PUAccountSerializer(account, data=request.data)
            return Response({'message': 'account created sccessfuly', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        except:
            return Response({'mesage': 'there is probleme anywhere!'}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            try:
                account = Account.objects.get(id=pk)
            except:
                return Response({'message': 'user not found'}, status=status.HTTP_404_NOT_FOUND)
            account.delete()
            return Response({'message': 'account deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

        except:
            return Response({"message": "there is probleme anywhere!"}, status=status.HTTP_400_BAD_REQUEST)

class CopiedTimeAccountViews(APIView):
    def put(self, request, pk):
        try:
            account = Account.objects.get(id=pk)
        except:
            return Response({'message': 'user not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = CopiedTimeAccountSerialzer(account, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'copied time updated successfuly', 'date': serializer.data}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response({'message': 'there is probleme in the field'}, status=status.HTTP_400_BAD_REQUEST)
