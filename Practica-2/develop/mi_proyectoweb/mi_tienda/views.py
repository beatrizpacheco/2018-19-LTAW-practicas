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
def list(request):
    objects1 = Bici.objects.all()
    objects2 = Disco.objects.all()
    objects3 = Libro.objects.all()
    html = "<p>Listado de articulos</p>" #PUTA MIERDA NO VA PERO CASI
    for elt in objects1:
        print(elt.name)
        html += ' <img ' + elt.image + '>'
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '<p>'
    for elt in objects2:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '<p>'
    for elt in objects3:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '<p>'
    return HttpResponse(html)

def bici (request):
    return render(request, "bici.html", {})

def discos (request):
    return render(request, "discos.html", {})

def libros (request):
    return render(request, "libros.html", {})
