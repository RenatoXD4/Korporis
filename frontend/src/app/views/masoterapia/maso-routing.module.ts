import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasoterapiaComponent } from './masoterapia.component';


const routes: Routes = [
  {
    path: '',
    component: MasoterapiaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasoRoutingModule { }
