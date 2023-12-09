"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from servicios.views import DatosAPIView, ObtenerEspecialidadesView, ObtenerSubespecialidadesView


urlpatterns = [
    path('admin/', admin.site.urls, name=''),
    path('api/datos/', DatosAPIView.as_view(), name='datos_api'),
    path('api/datos/especialidades/', ObtenerEspecialidadesView.as_view(), name='obtener_especialidades'),
    path('api/datos/subespecialidades/<str:nombre_especialidad>/', ObtenerSubespecialidadesView.as_view(), name='obtener_subespecialidades'),
]

from django.shortcuts import redirect

urlpatterns += [
    path('', lambda request: redirect('admin/', permanent=False)),
]
