import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioMusculoRoutingModule } from './servicio-musculo-routing.module';

import { ServicioMotrizComponent } from './serviciomotriz.component';

@NgModule({
    imports: [CommonModule, ServicioMusculoRoutingModule, ServicioMotrizComponent],
})
export class ServiciosMusculoModule { }