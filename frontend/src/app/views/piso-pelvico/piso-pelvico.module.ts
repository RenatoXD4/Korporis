import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PisoPelvicoComponent } from './piso-pelvico.component';
import { PisoPelvicoRoutingModule } from './piso-pelvico-routing.module';



@NgModule({
    imports: [
    CommonModule,
    PisoPelvicoRoutingModule,
    PisoPelvicoComponent
]
})
export class PisoPelvicoModule { }
