import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';

import { QuienesSomosComponent } from './quienes-somos.component';



@NgModule({
    imports: [CommonModule, QuienesSomosRoutingModule, QuienesSomosComponent],
})
export class QuienesSomosModule { }

