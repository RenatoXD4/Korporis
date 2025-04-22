import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioNeuroRoutingModule } from './servicio-neuro-routing.module';
 // Asegúrate de importar tu componente ServiciosComponent
import { ServicioneuroComponent } from './servicioneuro.component';

@NgModule({
    imports: [CommonModule, ServicioNeuroRoutingModule, ServicioneuroComponent],
})
export class ServiciosModule { }