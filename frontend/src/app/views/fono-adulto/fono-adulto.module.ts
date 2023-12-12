import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/module/common-module/common-module.module';  // Asegúrate de importar tu componente ServiciosComponent
import { FonoAdultoComponent } from './fono-adulto.component';
import { FonoAdultoRoutingModule } from './fono-adulto-routing.module';

@NgModule({
  declarations: [FonoAdultoComponent],  // Agrega aquí tu componente ServiciosComponent
  imports: [CommonModule,FonoAdultoRoutingModule ,SharedModule],
})
export class FonoAdultoModule { }