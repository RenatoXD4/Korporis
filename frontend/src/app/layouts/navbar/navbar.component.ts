import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApibackendService } from 'src/app/services/apibackend.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  especialidades: any[] = [];
  subespecialidades: any[] = [];


  constructor(private api: ApibackendService, private router: Router){

  }

  ngOnInit(): void {
    // Obtener todas las especialidades
    this.api.obtenerEspecialidades().subscribe(
      (especialidades: any) => {
        this.especialidades = especialidades;
      },
      error => {
        console.error('Error al obtener especialidades:', error);
      }
    );
  }

  // Método para obtener subespecialidades por especialidad
  obtenerSubespecialidades(especialidadId: number): void {
    this.api.obtenerSubespecialidadPorID(especialidadId).subscribe(
      (subespecialidades: any) => {
        this.subespecialidades = subespecialidades;
      },
      error => {
        console.error('Error al obtener subespecialidades:', error);
      }
    );
  }


}
