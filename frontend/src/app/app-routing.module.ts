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
    path: 'servicios',
    loadChildren: () => import('./views/servicios/servicios.module').then(m => m.ServiciosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
