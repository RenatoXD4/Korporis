import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioMotrizComponent } from './serviciomotriz.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioMotrizComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioMusculoRoutingModule { }
