"""mi_tienda URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))

el simbolo ^ busca la cadena de caracteres al principio
"""
from django.conf.urls import include, url
from django.contrib import admin
from mi_tienda.views import mi_funcion
from mi_tienda.views import mi_producto
from mi_tienda.views import saludo
from mi_tienda.views import hora_actual
from mi_tienda.views import cv
from mi_tienda.views import cv_render
from mi_tienda.views import index
from mi_tienda.views import get
from mi_tienda.views import main


urlpatterns = [
    url(r'^main/', index), # r es regular, ^ contener esos caracteres, $ que termine
    url(r'^get/', get),
    url(r'^cv/', cv),
    url(r'^curriculum/', cv_render),
    url(r'^hora/', hora_actual),
    url(r'^hola/', mi_funcion),
    url(r'^saludo/', saludo),
    url(r'^producto/(\d{1,2})/$',mi_producto),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', main),
]
