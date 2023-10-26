import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'contacto',
    loadChildren: () => import('./views/contacto/contacto-routing.module').then(m => m.ContactoRoutingModule)
  },
  {
    path: 'index',
    component: AppComponent // Reemplaza 'IndexComponent' con el nombre de tu componente
  },
  {
    path: '', // Ruta predeterminada
    redirectTo: 'index', // Redirige a 'index' como página de inicio
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
