import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-masoterapia',
    templateUrl: './masoterapia.component.html',
    styleUrls: ['./masoterapia.component.scss'],
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class MasoterapiaComponent {

}
