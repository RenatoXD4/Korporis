import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  // Asegúrate de importar tu componente ServiciosComponent
import { FonoAdultoComponent } from './fono-adulto.component';
import { FonoAdultoRoutingModule } from './fono-adulto-routing.module';

@NgModule({
    imports: [CommonModule, FonoAdultoRoutingModule, FonoAdultoComponent],
})
export class FonoAdultoModule { }