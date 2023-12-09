import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApibackendService {

  private apiUrl = 'http://localhost:8000/api/datos/';

  constructor(private http: HttpClient) {}

  obtenerSubespecialidadPorNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}subespecialidades/?nombre=${nombre}`);
  }

  obtenerSubespecialidadPorID(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}subespecialidades/?nombre=${id}`);
  }

  obtenerEspecialidades(): Observable<any> {
    return this.http.get(`${this.apiUrl}especialidades`);
  }
}
