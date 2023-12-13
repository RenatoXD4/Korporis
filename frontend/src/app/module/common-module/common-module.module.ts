import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/layouts/navbar/navbar.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';
import { ServiciosTodosComponent } from 'src/app/layouts/servicios/serviciosTodos.component';




@NgModule({
  declarations: [NavbarComponent, FooterComponent,ServiciosTodosComponent],
  exports: [NavbarComponent, FooterComponent, ServiciosTodosComponent],
  imports: [
    CommonModule, 
  ]
})
export class SharedModule { }
