import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { SharedModule } from 'src/app/module/common-module/common-module.module';



@NgModule({
  declarations: [],
  imports: [CommonModule, QuienesSomosRoutingModule, SharedModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class QuienesSomosModule { }
