import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioEraComponent } from './servicio-era.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioEraComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioEraRoutingModule { }
