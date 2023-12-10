import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos.component';
const routes: Routes = [
  {
    path: '',
    component: QuienesSomosComponent ,
  }
];

@NgModule({
  declarations: [],
  imports: [
      [RouterModule.forChild(routes)]
  ]
})
export class QuienesSomosRoutingModule { }
