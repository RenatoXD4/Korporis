import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FonoInfantilComponent } from './fono-infantil.component';


const routes: Routes = [
  {
    path: '',
    component: FonoInfantilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonoInfantilRoutingModule { }
