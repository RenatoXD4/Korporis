import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioMusculoRoutingModule } from './servicio-musculo-routing.module';
import { SharedModule } from 'src/app/module/common-module/common-module.module';
import { ServicioMotrizComponent } from './serviciomotriz.component';

@NgModule({
  declarations: [ServicioMotrizComponent],
  imports: [CommonModule, ServicioMusculoRoutingModule, SharedModule],
})
export class ServiciosMusculoModule { }