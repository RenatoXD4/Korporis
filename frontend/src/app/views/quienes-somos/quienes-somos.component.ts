import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-quienes-somos',
    templateUrl: './quienes-somos.component.html',
    styleUrls: ['./quienes-somos.component.scss'],
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class QuienesSomosComponent {


}
