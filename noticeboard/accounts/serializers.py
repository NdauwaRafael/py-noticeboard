from rest_framework import serializers
from django.contrib.auth import User
from django.contrib.auth import authenticate

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        Model = User
        fields = ['id', 'username', 'email']

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        Model = User
        fields = ('id', 'username', 'email', 'firstname', 'lastname', 'password')
        extra_kwargs = {
            'password': {'write_only': True}
        }

        def create(self, validated_data):
            user = User.objects.create_user(
                validated_data['username'],
                validated_data['email'],
                validated_data['firstname'],
                validated_data['lastname'],
                validated_data['password'])
                
            return user

# Login Serializer
# class LoginSerializer(serializers.ModelSerializer):
#     class Meta: