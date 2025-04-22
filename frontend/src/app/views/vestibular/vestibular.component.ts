import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

@Component({
    selector: 'app-vestibular',
    templateUrl: './vestibular.component.html',
    styleUrl: './vestibular.component.scss',
    standalone: true,
    imports: [NavbarComponent, FooterComponent]
})
export class VestibularComponent {

}
