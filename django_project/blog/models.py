from django.core.exceptions import NON_FIELD_ERRORS
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(default='', upload_to='posts_pics', null=True, blank=True)
    date = models.DateTimeField(auto_now=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username')
    address = models.CharField(max_length=50)    

    def __str__(self):
        return self.title
