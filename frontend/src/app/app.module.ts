import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { ContactoComponent } from './views/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactoComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
