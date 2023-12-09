import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApibackendService } from 'src/app/services/apibackend.service';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  especialidades: any[] = [];
  subespecialidades: any[] = [];
  subespecialidadesPorEspecialidad: { [key: string]: any[] } = {};

  private especialidadesSubscription: Subscription | undefined;


  constructor(private api: ApibackendService, private sharedService: SharedService){

  }

  ngOnInit(): void {
    // Obtener las especialidades al inicializar el componente
    this.api.obtenerEspecialidades().subscribe(
      (especialidades) => {
        // Actualizar las especialidades en el servicio compartido
        this.especialidades = especialidades;
        this.sharedService.updateEspecialidades(especialidades);
        // Suscribirse a los cambios en las especialidades
        this.especialidadesSubscription = this.sharedService.especialidades$.subscribe(
          (especialidadesActualizadas) => {
            this.especialidades = especialidadesActualizadas;
          }
        );
      },
      (error) => {
        console.error('Error al obtener especialidades:', error.message);
      }
    );
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar posibles fugas de memoria
    if (this.especialidadesSubscription) {
      this.especialidadesSubscription.unsubscribe();
    }
  }


  obtenerSubespecialidades(especialidadNombre: string): void {
    console.log('Iniciando la obtención de subespecialidades...');
    this.api.obtenerSubespecialidades(especialidadNombre).subscribe(
      (response: any) => {
        if (response && response.subespecialidades && Array.isArray(response.subespecialidades)) {
          console.log('Subespecialidades:', response.subespecialidades);
  
          // Almacena las subespecialidades en el objeto usando el nombre de la especialidad como clave
          this.subespecialidadesPorEspecialidad[especialidadNombre] = response.subespecialidades;
        } else {
          console.error('La respuesta del servidor no contiene subespecialidades válidas:', response);
        }
      },
      (error) => {
        console.error('Error al obtener subespecialidades:', error);
      }
    );
  }


  
  toggleDropdown(especialidadId: number, especialidadNombre: string): void {
    const dropdown = document.getElementById('doubleDropdown' + especialidadId);
    if (dropdown) {
      dropdown.classList.toggle('hidden');
  
      // Llama a la función para obtener las subespecialidades
      if (!this.subespecialidadesPorEspecialidad[especialidadNombre]?.length) {
        this.obtenerSubespecialidades(especialidadNombre);
      }
    }
  }

  // Método para obtener subespecialidades por especialidad


}
