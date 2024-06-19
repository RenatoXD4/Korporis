import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PisoPelvicoComponent } from './piso-pelvico.component';
const routes: Routes = [
  {
    path: '',
    component: PisoPelvicoComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PisoPelvicoRoutingModule { }
