import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-piso-pelvico',
    templateUrl: './piso-pelvico.component.html',
    styleUrl: './piso-pelvico.component.scss',
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class PisoPelvicoComponent {

}
