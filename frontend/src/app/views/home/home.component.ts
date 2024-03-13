import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MapaService } from 'src/app/services/mapa.service';
import * as L from 'leaflet';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';

interface Service {
  name: string;
  time: string;
  price: string;
  clockIcon: string;
  moneyIcon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {


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

    this.mapa.initializeMap();
    const map = this.mapa.getMap();
    L.marker([-33.47934347220281, -70.62450049198287]).addTo(map).bindPopup('Juan Sebastián Bach 208, San Joaquín').openPopup();

  }

  ngOnDestroy(): void {
    // Liberar recursos del mapa
    if (this.mapa) {
      this.mapa.destroyMap();
    }
  }


  

}
