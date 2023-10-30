import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'contacto',
    loadChildren: () => import('./views/contacto/contacto-routing.module').then(m => m.ContactoRoutingModule)
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
