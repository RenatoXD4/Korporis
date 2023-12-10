import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasFrecuentesRoutingModule } from './preguntas-frecuentes-routing.module';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes.component';
import { SharedModule } from 'src/app/module/common-module/common-module.module';



@NgModule({
  declarations: [PreguntasFrecuentesComponent],
  imports: [
    SharedModule,
    CommonModule,
    PreguntasFrecuentesRoutingModule
  ]
})
export class PreguntasFrecuentesModule { }
