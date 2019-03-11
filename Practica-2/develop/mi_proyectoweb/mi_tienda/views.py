# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Bici
from mi_tienda.models import Disco
from mi_tienda.models import Libro

# Create your views here.
def home_view (request):
    return render(request, "index.html", {})
# src="{% static 'bici.jpeg'%}"  onclick="window.location.href = './bici.html'"   src="bici.jpeg" width="200px" height="140px"


def bici (request):
    bici = Bici.objects.all()
    return render(request, "productos.html", {'productos': bici})

def discos (request):
    discos = Disco.objects.all()
    return render(request, "productos.html", {'productos': discos})

def libros (request):
    libros = Libro.objects.all()
    return render(request, "productos.html", {'productos':libros})
