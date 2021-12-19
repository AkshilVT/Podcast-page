from django.urls import path
from django.urls.conf import re_path
from .views import HomeView

urlpatterns = [
    re_path(r'.*', HomeView.as_view(), name='home')
]