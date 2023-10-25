import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacto',
    loadChildren: () => import('./views/contacto/contacto-routing.module').then(m => m.ContactoRoutingModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./app-routing.module').then(m => m.AppRoutingModule)
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
