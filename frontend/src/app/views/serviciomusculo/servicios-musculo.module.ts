import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioMusculoRoutingModule } from './servicio-musculo-routing.module';

import { ServicioMusculoComponent } from './serviciomusculo.component';

@NgModule({
    imports: [CommonModule, ServicioMusculoRoutingModule, ServicioMusculoComponent],
})
export class ServiciosMusculoModule { }