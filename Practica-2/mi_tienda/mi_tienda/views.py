from django.http import HttpResponse
from django.template.loader import get_template
from django.template import Template, Context
from datetime import datetime

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

def saludo(request):
    now = datetime.now()
    fp = open('/home/alumnos/bpacheco/2018-19-LTAW-practicas/Practica-2/mi_tienda/mi_tienda/cv.html')
    t = Template(fp.read())
    fp.close()
    c = Context({' '})

    html = t.render(c)
    return HttpResponse(html)
