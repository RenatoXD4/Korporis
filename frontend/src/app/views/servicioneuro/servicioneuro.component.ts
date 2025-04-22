import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-servicioneuro',
    templateUrl: './servicioneuro.component.html',
    styleUrls: ['./servicioneuro.component.scss'],
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class ServicioneuroComponent {

}
