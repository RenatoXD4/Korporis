import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioGeriaRoutingModule } from './servicio-geria-routing.module';
import { SharedModule } from 'src/app/module/common-module/common-module.module';  // Asegúrate de importar tu componente ServiciosComponent
import { ServiciogeriaComponent } from './serviciogeria.component';


@NgModule({
  declarations: [ServiciogeriaComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule,ServicioGeriaRoutingModule , SharedModule],
})
export class ServiciosGeriaModule { }