import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-fono-adulto',
    templateUrl: './fono-adulto.component.html',
    styleUrls: ['./fono-adulto.component.scss'],
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class FonoAdultoComponent {

}
