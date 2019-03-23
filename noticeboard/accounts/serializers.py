from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name' )
        extra_kwargs = {
            'password': {'write_only': True}
        }

        def create(self, validated_data):
            user = User.objects.create_user(
                validated_data['username'],
                validated_data['password'],
                validated_data['email'],
                validated_data['first_name'],
                validated_data['last_name']
                )
                
            return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError( user)