import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-serviciomotriz',
    templateUrl: './serviciomotriz.component.html',
    styleUrl: './serviciomotriz.component.scss',
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class ServicioMotrizComponent {

}
