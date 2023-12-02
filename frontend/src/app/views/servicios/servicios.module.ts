import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioRoutingModule } from './servicio-routing.module';
import { ServiciosComponent } from './servicios.component';
import { NavbarComponent } from 'src/app/layouts/navbar/navbar.component';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [CommonModule, ServicioRoutingModule],
})
export class ServiciosModule { }
