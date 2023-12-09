from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
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

class ObtenerEspecialidadesView(View):
    def get(self, request, *args, **kwargs):
        # Obtener las especialidades desde la base de datos
        especialidades = Especialidad.objects.all()

        # Convertir las especialidades a un formato JSON
        especialidades_json = [{"id": esp.id, "nombre": esp.nombre} for esp in especialidades]

        # Retornar la respuesta JSON
        return JsonResponse({"especialidades": especialidades_json})
    
class ObtenerSubespecialidadesView(View):
    def get(self, request, *args, **kwargs):
        try:
            # Obtener el nombre de la especialidad desde la URL
            nombre_especialidad = kwargs.get('nombre_especialidad')
            
            # Obtener las subespecialidades desde la base de datos
            subespecialidades = Subespecialidad.objects.filter(especialidad__nombre=nombre_especialidad)
            
            # Convertir las subespecialidades a formato JSON
            subespecialidades_json = [{"id": sub.id, "nombre": sub.nombre} for sub in subespecialidades]
            
            # Retornar la respuesta JSON
            return JsonResponse({"subespecialidades": subespecialidades_json})
        except Exception as e:
            # Registrar el error para su revisión
            print(f"Error al obtener subespecialidades: {str(e)}")
            return JsonResponse({"error": "Error interno del servidor"}, status=500)