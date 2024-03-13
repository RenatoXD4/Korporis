import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/layouts/navbar/navbar.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';
import { ServiciosTodosComponent } from 'src/app/layouts/servicios/serviciosTodos.component';
import { PreciosComponent } from 'src/app/layouts/precios/precios.component';




@NgModule({
  declarations: [NavbarComponent, FooterComponent,ServiciosTodosComponent, PreciosComponent],
  exports: [NavbarComponent, FooterComponent, ServiciosTodosComponent, PreciosComponent],
  imports: [
    CommonModule, 
  ]
})
export class SharedModule { }
