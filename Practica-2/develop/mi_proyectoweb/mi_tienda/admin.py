# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Bici
from .models import Libro
from .models import Disco

# Register your models here.
admin.site.register(Bici)
admin.site.register(Disco)
admin.site.register(Libro)
