import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'servicio',
    loadChildren: () => import('./views/servicios/servicio-module/servicio-module.module').then(m => m.ServicioModuleModule)
  },
  {
    path: 'home',
    component: AppComponent // Reemplaza 'HomeComponent' con el nombre de tu componente
  },
  {
    path: '', // Ruta predeterminada
    redirectTo: 'home', // Redirige a 'index' como página de inicio
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
