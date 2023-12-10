import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosModule } from './views/servicios/servicios.module';
import { SharedModule } from './module/common-module/common-module.module';
import { ServiciosMusculoModule } from './views/serviciomusculo/servicios-musculo.module';
import { QuienesSomosModule } from './views/quienes-somos/quienes-somos.module';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiciosModule,
    SharedModule,  
    ServiciosMusculoModule,
    BrowserAnimationsModule,
    QuienesSomosModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
