import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/module/common-module/common-module.module';  // Asegúrate de importar tu componente ServiciosComponent
import { FonoInfantilComponent } from './fono-infantil.component';
import { FonoInfantilRoutingModule } from './fono-infantil-routing.module';

@NgModule({
  declarations: [FonoInfantilComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule,FonoInfantilRoutingModule ,SharedModule],
})
export class FonoInfantilModule { }