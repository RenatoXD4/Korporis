import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-serviciomusculo',
    templateUrl: './serviciomusculo.component.html',
    styleUrls: ['./serviciomusculo.component.scss'],
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class ServicioMusculoComponent {

}
