import { Component } from '@angular/core';
import { MapaService } from 'src/app/services/mapa.service';
import * as L from 'leaflet';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private mapa: MapaService) { }
   mySwiper: Swiper | undefined;

  
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
  
  
    window.addEventListener('DOMContentLoaded', () => {
        this.mapa.initializeMap();
        console.log("Mapa:")
        // Obtain the map instance
        const map = this.mapa.getMap();
  
        // Add a marker
        L.marker([51.5, -0.09]).addTo(map)
          .bindPopup('¡Hola, soy un marcador!').openPopup();
  
    });
  }

}
