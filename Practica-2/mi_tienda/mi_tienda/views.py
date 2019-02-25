from django.http import HttpResponse
from django.template.loader import get_template
from django.template import Template, Context
from datetime import datetime
from django.shortcuts import render

def main(request):
    now = datetime.now()
    html = "MI TIENDA "
    return HttpResponse(html)

def mi_funcion(request):
    html = "Hola! Esto es una prueba"

    return HttpResponse(html)

def mi_producto(request, param):
	numero = int(param)
	html = "Acceso a producto: %i" % numero;
	return HttpResponse(html)

PLANTILLA = """
<!DOCTYPE html>
<html lang="eS" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Saludo</title>
  </head>
  <body>

      <p>Bienvenido a mi tienda, {{user}} </p>
      <p>Son las  {{hora}} </p>

  </body>
</html>
"""

def index(request):
    now = datetime.now()
    return render(request, 'test.html', {'user':'Epic Saxo guy', 'hora': now})

def get(request):
    now = datetime.now()
    t = get_template('test.html')
    c = {'user':'Epic Saxo guy', 'hora': now}

    html = t.render(c)
    return HttpResponse(html)



def hora_actual(request):
    now = datetime.now()
    fp = open('/home/alumnos/bpacheco/2018-19-LTAW-practicas/Practica-2/mi_tienda/mi_tienda/test.html')
    t = Template(fp.read())
    fp.close()
    c = Context({'user':'Epic Saxo guy', 'hora': now})

    html = t.render(c)
    return HttpResponse(html)

def saludo(request):
    t = Template(PLANTILLA)
    c = Context({'user':'Gato con Botas'})
    html = t.render(c)
    return HttpResponse(html)

def cv(request):
    fp = open('/home/alumnos/bpacheco/2018-19-LTAW-practicas/Practica-2/mi_tienda/mi_tienda/cv.html')
    t = Template(fp.read())
    fp.close()
    c = Context({' '})
    html = t.render(c)
    return HttpResponse(html)

def cv_render(request):
    return render(request, 'cv.html', {'user': 'Bea'})
