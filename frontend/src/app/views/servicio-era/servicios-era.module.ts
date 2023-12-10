import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/module/common-module/common-module.module';  // Asegúrate de importar tu componente ServiciosComponent
import { ServicioEraComponent } from './servicio-era.component';
import { ServicioEraRoutingModule } from './servicio-era-routing.module';

@NgModule({
  declarations: [ServicioEraComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule,ServicioEraRoutingModule , SharedModule],
})
export class ServiciosEraModule { }