from user.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer


# User View Set
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.ojects.all()
    permission_classes = [
        permissions.allowAny()
    ]
    serializer_class = UserSerializer
