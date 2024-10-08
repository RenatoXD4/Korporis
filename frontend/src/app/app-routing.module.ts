import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home-module.module').then(m => m.HomeModule)
  },
  {
    path: '', // Ruta predeterminada
    redirectTo: '',
    pathMatch: 'full'
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
  { 
    path: 'Servicio-Geriatrica',
    loadChildren: () => import('./views/serviciogeria/servicios-geria.module').then(m => m.ServiciosGeriaModule)
  },
  { 
    path: 'Servicio-Psicomotriz',
    loadChildren: () => import('./views/serviciomotriz/servicios-musculo.module').then(m => m.ServiciosMusculoModule)
  },
  { 
    path: 'Servicio-Pelvico',
    loadChildren: () => import('./views/piso-pelvico/piso-pelvico.module').then(m => m.PisoPelvicoModule)
  },
  { 
    path: 'Servicio-Vestibular',
    loadChildren: () => import('./views/vestibular/servicios-vestibular.module').then(m => m.ServiciosVestibularModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
