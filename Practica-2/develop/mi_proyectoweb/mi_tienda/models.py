from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Bici (models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name

class Disco (models.Model):
    grupo = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.grupo

class Libro (models.Model):
    author = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.author
