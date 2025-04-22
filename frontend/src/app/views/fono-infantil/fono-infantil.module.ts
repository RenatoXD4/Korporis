import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  // Asegúrate de importar tu componente ServiciosComponent
import { FonoInfantilComponent } from './fono-infantil.component';
import { FonoInfantilRoutingModule } from './fono-infantil-routing.module';

@NgModule({
    imports: [CommonModule, FonoInfantilRoutingModule, FonoInfantilComponent],
})
export class FonoInfantilModule { }