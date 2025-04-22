import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioIraRoutingModule } from './servicio-ira-routing.module';
  // Asegúrate de importar tu componente ServiciosComponent
import { ServicioIRAComponent } from './servicio-ira.component';

@NgModule({
    imports: [CommonModule, ServicioIraRoutingModule, ServicioIRAComponent],
})
export class ServiciosIraModule { }