import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioNeuroRoutingModule } from './servicio-neuro-routing.module';
import { SharedModule } from 'src/app/module/common-module/common-module.module'; // Asegúrate de importar tu componente ServiciosComponent
import { ServicioneuroComponent } from '../servicioneuro/servicioneuro.component';

@NgModule({
  declarations: [ServicioneuroComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule, ServicioNeuroRoutingModule, SharedModule],
})
export class ServiciosModule { }