import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioneuroComponent } from './servicioneuro.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioneuroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioNeuroRoutingModule { }
