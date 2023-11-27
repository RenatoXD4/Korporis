import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioRoutingModule } from './servicio-routing.module';
import { NavbarComponent } from 'src/app/layouts/navbar/navbar.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';
import { ServiciosComponent } from './servicios.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ServiciosComponent
  ],
  imports: [
    ServicioRoutingModule,
    CommonModule
  ]
})
export class ServiciosModule { }
