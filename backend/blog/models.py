from django.db import models
from django.db.models.fields.files import ImageField

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    image = ImageField(upload_to='blog/images',
                       blank=True, null=True, default='')

    def __str__(self):
        return self.title
