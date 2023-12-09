import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ApibackendService {

  private apiUrl = 'http://localhost:8000/api/datos/';

  constructor(private http: HttpClient, private sharedDatService: SharedService) {}

  obtenerEspecialidades(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}especialidades`);
  }

  obtenerSubespecialidades(especialidadNombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}subespecialidades/${encodeURIComponent(especialidadNombre)}`);
  }

  actualizarEspecialidades(): void {
    this.obtenerEspecialidades().subscribe(
      (especialidades) => {
        // Actualizar el servicio compartido con las nuevas especialidades
        this.sharedDatService.updateEspecialidades(especialidades);
      },
      (error) => {
        console.error('Error al obtener especialidades:', error.message);
      }
    );
  }

  actualizarSubespecialidades(especialidadNombre: string): void {
    this.obtenerSubespecialidades(especialidadNombre).subscribe(
      (subespecialidades) => {
        // Actualizar el servicio compartido con las nuevas subespecialidades
        this.sharedDatService.updateSubespecialidades(subespecialidades);
      },
      (error) => {
        console.error('Error al obtener subespecialidades:', error.message);
      }
    );
  }

}
