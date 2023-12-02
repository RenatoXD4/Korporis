import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioRoutingModule } from './servicio-routing.module';
import { SharedModule } from 'src/app/module/common-module/common-module.module';
import { ServiciosComponent } from './servicios.component';  // Asegúrate de importar tu componente ServiciosComponent

@NgModule({
  declarations: [ServiciosComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule, ServicioRoutingModule, SharedModule],
})
export class ServiciosModule { }