import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { SharedModule } from 'src/app/module/common-module/common-module.module';
import { QuienesSomosComponent } from './quienes-somos.component';



@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [CommonModule, QuienesSomosRoutingModule, SharedModule],
})
export class QuienesSomosModule { }

