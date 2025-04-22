import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-serviciogeria',
    templateUrl: './serviciogeria.component.html',
    styleUrl: './serviciogeria.component.scss',
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class ServiciogeriaComponent {

}
