import { Component, ElementRef, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  mySwiper: Swiper | undefined;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true, // Habilita el deslizamiento infinito
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      modules: [Navigation, Pagination],
    });
  }

  
  ngOnInit(): void {
    initFlowbite();
  }
}


