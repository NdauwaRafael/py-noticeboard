from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length = 500)
    owner = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)