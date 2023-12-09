import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  private especialidadesSubject = new BehaviorSubject<any[]>([]);
  especialidades$ = this.especialidadesSubject.asObservable();

  private subespecialidadesSubject = new BehaviorSubject<any[]>([]);
  subespecialidades$ = this.subespecialidadesSubject.asObservable();

  updateEspecialidades(especialidades: any[]): void {
    this.especialidadesSubject.next(especialidades);
  }

  updateSubespecialidades(subespecialidades: any[]): void {
    this.subespecialidadesSubject.next(subespecialidades);
  }
}
