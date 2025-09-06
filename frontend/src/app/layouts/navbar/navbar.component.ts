import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
})
export class NavbarComponent implements OnInit {
  dropdownPlacement: string = 'bottom';

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.updateDropdownPlacement();
  }

  // Actualizar la colocación basado en el tamaño de pantalla
  updateDropdownPlacement(): void {
    if (window.innerWidth < 768) {
      this.dropdownPlacement = 'bottom'; // Para móviles
    } else {
      this.dropdownPlacement = 'right-start'; // Para desktop
    }
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateDropdownPlacement();
  }
}
