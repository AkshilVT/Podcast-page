from rest_framework import serializers
from .models import Blog
from django.conf import settings


class BlogSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    def get_image(self, object):
        if object.image:
            return self.context.get('request').build_absolute_uri(object.image.url)
        else:
            return None

    class Meta:
        model = Blog
        fields = '__all__'
