import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/module/common-module/common-module.module';  // Asegúrate de importar tu componente ServiciosComponent
import { MasoRoutingModule } from './maso-routing.module';
import { MasoterapiaComponent } from './masoterapia.component';

@NgModule({
  declarations: [MasoterapiaComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule,MasoRoutingModule ,SharedModule],
})
export class MasoModule { }