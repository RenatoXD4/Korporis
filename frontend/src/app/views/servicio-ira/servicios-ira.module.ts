import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioIraRoutingModule } from './servicio-ira-routing.module';
import { SharedModule } from 'src/app/module/common-module/common-module.module';  // Asegúrate de importar tu componente ServiciosComponent
import { ServicioIRAComponent } from './servicio-ira.component';

@NgModule({
  declarations: [ServicioIRAComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule,ServicioIraRoutingModule , SharedModule],
})
export class ServiciosIraModule { }