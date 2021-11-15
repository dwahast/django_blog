from django.contrib import admin
from .models import Post

class Posts(admin.ModelAdmin):
    list_display = ('id', 'title', 'author')
    list_display_links = ('id', 'author')
    search_fields = ('title', 'author')


admin.site.register(Post, Posts)
