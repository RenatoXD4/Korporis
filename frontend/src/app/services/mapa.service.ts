import { Injectable } from '@angular/core';
import { Map, TileLayer, Marker } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private map!: L.Map;


  constructor() { }

  initializeMap() {
    const map = new Map('map').setView([51.505, -0.09], 13);

    const tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = new Marker([51.5, -0.09]).addTo(map)
      .bindPopup('¡Hola, soy un marcador!').openPopup();
  }

  getMap(): L.Map {
    return this.map;
  }

}
