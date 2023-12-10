import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioMusculoComponent } from './serviciomusculo.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioMusculoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioMusculoRoutingModule { }
