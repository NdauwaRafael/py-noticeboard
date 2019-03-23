from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('user.urls')),
    path('', include('roles.urls')),
    path('', include('permissions.urls')),
    path('', include('posts.urls')),
    path('', include('accounts.urls')),
]
