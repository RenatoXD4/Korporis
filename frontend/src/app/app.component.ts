import { Component, ElementRef, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Marker } from 'leaflet';
import { MapaService } from './services/mapa.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  mySwiper: Swiper | undefined;

  constructor(private mapa: MapaService) { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3000, // Aumenta el intervalo a 3000 milisegundos (3 segundos)
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      modules: [Navigation, Pagination],
    });
  }


  ngOnInit(): void {
    initFlowbite();

    this.mapa.initializeMap();

    // Obtén la instancia del mapa
    const map = this.mapa.getMap();

    const marker = new Marker([51.5, -0.09]).addTo(map)
    .bindPopup('¡Hola, soy un marcador!').openPopup();;
    
  }
}



