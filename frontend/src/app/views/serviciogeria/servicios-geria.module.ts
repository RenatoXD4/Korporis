import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioGeriaRoutingModule } from './servicio-geria-routing.module';
  // Asegúrate de importar tu componente ServiciosComponent
import { ServiciogeriaComponent } from './serviciogeria.component';


@NgModule({
    imports: [CommonModule, ServicioGeriaRoutingModule, ServiciogeriaComponent],
})
export class ServiciosGeriaModule { }