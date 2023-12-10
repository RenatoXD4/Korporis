import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioIRAComponent } from './servicio-ira.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioIRAComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioIraRoutingModule { }
