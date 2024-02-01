import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home-module.module').then(m => m.HomeModule)
  },
  {
    path: '', // Ruta predeterminada
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'Servicio-Medicina-General',
    loadChildren: () => import('./views/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'Preguntas-Frecuentes',
    loadChildren: () => import('./views/preguntas-frecuentes/preguntas-frecuentes.module').then(m => m.PreguntasFrecuentesModule)
  },
  {
    path: 'Servicio-Músculo-Esquelético',
    loadChildren: () => import('./views/serviciomusculo/servicios-musculo.module').then(m => m.ServiciosMusculoModule)
  },
  { 
  path: 'Quienes-Somos',
  loadChildren: () => import('./views/quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule)
  },
  { 
    path: 'Servicio-Neurológico',
    loadChildren: () => import('./views/servicioneuro/servicios-neuro.module').then(m => m.ServiciosModule)
  },
  { 
    path: 'Servicio-IRA',
    loadChildren: () => import('./views/servicio-ira/servicios-ira.module').then(m => m.ServiciosIraModule)
  },
  { 
    path: 'Servicio-ERA',
    loadChildren: () => import('./views/servicio-era/servicios-era.module').then(m => m.ServiciosEraModule)
  },
  { 
    path: 'Servicio-FonoAudiologia-Adulto',
    loadChildren: () => import('./views/fono-adulto/fono-adulto.module').then(m => m.FonoAdultoModule)
  },
  { 
    path: 'Servicio-FonoAudiologia-Infantil',
    loadChildren: () => import('./views/fono-infantil/fono-infantil.module').then(m => m.FonoInfantilModule)
  },
  { 
    path: 'Servicio-Masoterapia',
    loadChildren: () => import('./views/masoterapia/maso.module').then(m => m.MasoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
