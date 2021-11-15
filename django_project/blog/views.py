from .models import Post
from . import serializer
from rest_framework import viewsets

class PostsViewSet(viewsets.ModelViewSet):
    # TODO: Aqui seria uma paginação talvez.
    queryset = Post.objects.all()    
    serializer_class = serializer.PostSerializer
