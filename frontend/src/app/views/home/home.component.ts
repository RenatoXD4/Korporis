import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MapaService } from 'src/app/services/mapa.service';
import * as L from 'leaflet';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { PreciosComponent } from '../../layouts/precios/precios.component';
import { ServiciosTodosComponent } from '../../layouts/servicios/serviciosTodos.component';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';

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
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NavbarComponent, ServiciosTodosComponent, PreciosComponent, FooterComponent]
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
  }

  ngOnDestroy(): void {
    // Liberar recursos del mapa
    if (this.mapa) {
      this.mapa.destroyMap();
    }
  }


  

}
