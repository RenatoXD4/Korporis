import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  // Asegúrate de importar tu componente ServiciosComponent
import { MasoRoutingModule } from './maso-routing.module';
import { MasoterapiaComponent } from './masoterapia.component';

@NgModule({
    imports: [CommonModule, MasoRoutingModule, MasoterapiaComponent],
})
export class MasoModule { }