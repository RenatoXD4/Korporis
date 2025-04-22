import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-servicio-ira',
    templateUrl: './servicio-ira.component.html',
    styleUrls: ['./servicio-ira.component.scss'],
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class ServicioIRAComponent {

}
