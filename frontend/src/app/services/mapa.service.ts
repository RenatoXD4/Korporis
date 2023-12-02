import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private map!: L.Map;


  constructor() { }

  initializeMap() {
    if (!this.map) {
      this.map = L.map('map').setView([-33.47934347220281, -70.62450049198287], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
    }
  }

  getMap(): L.Map {
    return this.map;
  }

  destroyMap() {
    if (this.map) {
      this.map.remove();
      this.map = undefined as any; // Limpiar la referencia al mapa
    }
  }

}
