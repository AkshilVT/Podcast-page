from django.contrib import admin
from .models import Podcast

# Register your models here.


class PodcastAdmin(admin.ModelAdmin):
    list_display = ('title', 'speaker', 'description', 'image', 'record')


admin.site.register(Podcast, PodcastAdmin)
