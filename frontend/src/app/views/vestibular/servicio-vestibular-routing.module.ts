import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VestibularComponent } from './vestibular.component';


const routes: Routes = [
  {
    path: '',
    component: VestibularComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioNeuroRoutingModule { }
