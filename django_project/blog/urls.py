from django.urls import path, include
from rest_framework import routers
from . import views


route = routers.DefaultRouter()
route.register(r'', views.PostsViewSet, basename='Posts')

urlpatterns = [
    path('', include(route.urls), name='blog-api'),
]