import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosModule } from './views/servicios/servicios.module';
import { SharedModule } from './module/common-module/common-module.module';
import { PreguntasFrecuentesComponent } from './views/preguntas-frecuentes/preguntas-frecuentes.component';
import { ServiciosMusculoModule } from './views/serviciomusculo/servicios-musculo.module';



@NgModule({
  declarations: [
    AppComponent,
    PreguntasFrecuentesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiciosModule,
    SharedModule,  
    ServiciosMusculoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
