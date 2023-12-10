import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/layouts/navbar/navbar.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule, 
  ]
})
export class SharedModule { }
