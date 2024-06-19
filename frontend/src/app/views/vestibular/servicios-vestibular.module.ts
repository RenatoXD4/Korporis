import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/module/common-module/common-module.module'; // Asegúrate de importar tu componente ServiciosComponent
import { ServicioVestibularRoutingModule } from './servicio-vestibular-routing.module';
import { VestibularComponent } from './vestibular.component';

@NgModule({
  declarations: [VestibularComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule, ServicioVestibularRoutingModule, SharedModule],
})
export class ServiciosVestibularModule { }