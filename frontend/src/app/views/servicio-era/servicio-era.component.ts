import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-servicio-era',
    templateUrl: './servicio-era.component.html',
    styleUrls: ['./servicio-era.component.scss'],
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class ServicioEraComponent {

}
