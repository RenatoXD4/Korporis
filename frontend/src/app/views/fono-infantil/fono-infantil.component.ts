import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-fono-infantil',
    templateUrl: './fono-infantil.component.html',
    styleUrls: ['./fono-infantil.component.scss'],
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class FonoInfantilComponent {

}
