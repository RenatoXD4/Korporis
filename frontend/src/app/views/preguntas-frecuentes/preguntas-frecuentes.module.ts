import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasFrecuentesRoutingModule } from './preguntas-frecuentes-routing.module';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes.component';




@NgModule({
    imports: [
    CommonModule,
    PreguntasFrecuentesRoutingModule,
    PreguntasFrecuentesComponent
]
})
export class PreguntasFrecuentesModule { }
