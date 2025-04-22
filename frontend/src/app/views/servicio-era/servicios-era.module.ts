import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  // Asegúrate de importar tu componente ServiciosComponent
import { ServicioEraComponent } from './servicio-era.component';
import { ServicioEraRoutingModule } from './servicio-era-routing.module';

@NgModule({
    imports: [CommonModule, ServicioEraRoutingModule, ServicioEraComponent],
})
export class ServiciosEraModule { }