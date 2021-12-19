from blog.views import blog_list
from django.urls.conf import path

urlpatterns = [
    path('blog_list', blog_list, name='blog_list'),
]