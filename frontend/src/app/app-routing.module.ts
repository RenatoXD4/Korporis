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
    path: 'Medicina-General',
    loadChildren: () => import('./views/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./views/preguntas-frecuentes/preguntas-frecuentes.module').then(m => m.PreguntasFrecuentesModule)
  },
  {
    path: 'Músculo-Esquelético',
    loadChildren: () => import('./views/serviciomusculo/servicios-musculo.module').then(m => m.ServiciosMusculoModule)
  },
  { 
  path: 'Quienes Somos',
  loadChildren: () => import('./views/quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule)
  },
  { 
    path: 'Neurológico',
    loadChildren: () => import('./views/servicioneuro/servicios-neuro.module').then(m => m.ServiciosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
