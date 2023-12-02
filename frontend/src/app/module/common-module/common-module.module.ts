import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/layouts/navbar/navbar.component';
import { FooterComponent } from 'src/app/layouts/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent, RouterModule],
  imports: [
    CommonModule, 
    RouterModule
  ]
})
export class SharedModule { }
