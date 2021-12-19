from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Blog
from .serializer import BlogListSerializer


# Create your views here.
# @login_required
@api_view(["GET"])
def blog_list(request):
    """ Returns dict of all the blogs"""

    return Response(
        BlogListSerializer(

            Blog.objects.all(),
            context={"request": request},
            many=True

        ).data
    )