import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FonoAdultoComponent } from './fono-adulto.component';


const routes: Routes = [
  {
    path: '',
    component: FonoAdultoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonoAdultoRoutingModule { }
