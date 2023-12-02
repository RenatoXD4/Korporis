import { Component, Renderer2,OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import Swiper from 'swiper';
import { MapaService } from './services/mapa.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  mySwiper: Swiper | undefined;

  constructor(private mapa: MapaService, private renderer: Renderer2) { }


  ngOnInit(): void {

    initFlowbite();
  
  }
  

}



