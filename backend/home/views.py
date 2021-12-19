from django.shortcuts import render
from reacttools.views import ReactProxyMixin
from django.views.generic import TemplateView

# Create your views here.
class HomeView(ReactProxyMixin, TemplateView):
    template_name = "home_app/test.html"
    react_settings = 'react-app'