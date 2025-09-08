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

  updateDropdownPlacement(): void {
    if (window.innerWidth < 768) {
      this.dropdownPlacement = 'bottom'; 
    } else {
      this.dropdownPlacement = 'right-start'; 
    }
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateDropdownPlacement();
  }
}
