from .models import Post
from . import serializer
from rest_framework import viewsets


class PostsViewSet(viewsets.ModelViewSet):
    http_method_names = ['get']
    # TODO: Aqui seria uma paginação talvez.
    queryset = Post.objects.all()    
    serializer_class = serializer.PostSerializer