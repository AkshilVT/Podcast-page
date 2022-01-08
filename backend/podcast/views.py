from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PodcastSerializer
from .models import Podcast

# Create your views here.


class PodcastView(viewsets.ModelViewSet):
    serializer_class = PodcastSerializer
    queryset = Podcast.objects.all()
