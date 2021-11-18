from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import markdown

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(help_text='Use Markdown syntax.')
    content_html = models.TextField(editable=False, blank=True)
    markdown = models.BooleanField(default=False)
    image = models.ImageField(default='', upload_to='posts_pics', null=True, blank=True)
    date = models.DateTimeField(auto_now=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE, to_field='username')
    address = models.CharField(max_length=50)    

    def save(self):
        md = markdown.Markdown(extensions=['extra'])
        self.content_html = md.convert(self.content)
        super(Post, self).save()


    def __str__(self):
        return self.title
