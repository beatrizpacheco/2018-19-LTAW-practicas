from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^list/', views.list),
    url(r'^bici', views.bici),
    url(r'^libros', views.libros),
    url(r'^discos', views.discos),
]
