import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/module/common-module/common-module.module';
import { PisoPelvicoComponent } from './piso-pelvico.component';
import { PisoPelvicoRoutingModule } from './piso-pelvico-routing.module';



@NgModule({
  declarations: [PisoPelvicoComponent],
  imports: [
    SharedModule,
    CommonModule,
    PisoPelvicoRoutingModule
  ]
})
export class PisoPelvicoModule { }
