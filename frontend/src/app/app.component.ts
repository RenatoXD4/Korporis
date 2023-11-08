import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';
import * as L from 'leaflet';
import { MapaService } from './services/mapa.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'frontend';

  mySwiper: Swiper | undefined;

  constructor(private mapa: MapaService) { }

  ngAfterViewInit(): void {
    Swiper.use([Autoplay])
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
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
    
    window.addEventListener('DOMContentLoaded', () => {
      this.mapa.initializeMap();
      console.log("Mapa:" + this.mapa.initializeMap)
      // Obtén la instancia del mapa
      const map = this.mapa.getMap();
    
      // Agrega un marcador
      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('¡Hola, soy un marcador!').openPopup();
    });
  }

}



