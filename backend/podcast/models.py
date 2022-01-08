from django.db import models
from django.db.models.fields.files import FileField, ImageField

# Create your models here.


class Podcast(models.Model):
    title = models.CharField(max_length=35)
    speaker = models.CharField(max_length=35)
    description = models.TextField()
    image = ImageField(upload_to='podcast/images',
                       blank=True, null=True, default='')
    record = FileField(upload_to='podcast/audio')
