import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrl: './servicios.component.scss',
    standalone: true,
    imports: [NgIf]
})
export class ServiciosTodosComponent {
  categoriaSeleccionada = 'Kine';
}
