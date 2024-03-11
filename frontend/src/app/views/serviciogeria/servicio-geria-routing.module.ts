import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciogeriaComponent } from './serviciogeria.component';


const routes: Routes = [
  {
    path: '',
    component: ServiciogeriaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioGeriaRoutingModule { }
