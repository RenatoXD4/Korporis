from rest_framework import serializers
from .models import Especialidad, Subespecialidad

class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidad
        fields = ['id', 'nombre']

class SubespecialidadSerializer(serializers.ModelSerializer):
    especialidad = EspecialidadSerializer()

    class Meta:
        model = Subespecialidad
        fields = ['id', 'nombre', 'descripcion', 'imagen', 'especialidad']