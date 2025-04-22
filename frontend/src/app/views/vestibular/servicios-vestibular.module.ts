import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 // Asegúrate de importar tu componente ServiciosComponent
import { ServicioVestibularRoutingModule } from './servicio-vestibular-routing.module';
import { VestibularComponent } from './vestibular.component';

@NgModule({
    imports: [CommonModule, ServicioVestibularRoutingModule, VestibularComponent],
})
export class ServiciosVestibularModule { }