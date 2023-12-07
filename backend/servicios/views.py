from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Especialidad, Subespecialidad
from .serializers import EspecialidadSerializer, SubespecialidadSerializer

class DatosAPIView(APIView):
    def get(self, request, *args, **kwargs):
        especialidades = Especialidad.objects.all()
        subespecialidades = Subespecialidad.objects.all()

        especialidades_serializer = EspecialidadSerializer(especialidades, many=True)
        subespecialidades_serializer = SubespecialidadSerializer(subespecialidades, many=True)

        data = {
            'especialidades': especialidades_serializer.data,
            'subespecialidades': subespecialidades_serializer.data,
        }

        return Response(data, status=status.HTTP_200_OK)

