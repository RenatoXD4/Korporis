import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/layouts/navbar/navbar.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';
import { ServiciosComponent } from 'src/app/layouts/servicios/servicios.component';




@NgModule({
  declarations: [NavbarComponent, FooterComponent,ServiciosComponent],
  exports: [NavbarComponent, FooterComponent, ServiciosComponent],
  imports: [
    CommonModule, 
  ]
})
export class SharedModule { }
