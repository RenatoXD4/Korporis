import { Component } from '@angular/core';

interface Service {
  name: string;
  time: string;
  price: string;
  clockIcon: string;
  moneyIcon: string;
  categoria: string;
  image: string;
}


@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.scss'
})
export class PreciosComponent {

  categoriaSeleccionada = 'Kine'

  services: Service[] = [
    { name: "Masaje descontracturante", time: "40 minutos", price: "25.000", clockIcon: "clock2.svg", moneyIcon: "dinero.svg", categoria: 'Kine', image: 'massage.svg' },
    { name: "Drenaje linfático", time: "40 minutos", price: "22.000", clockIcon: "clock2.svg", moneyIcon: "dinero.svg", categoria: 'Kine', image: 'massage.svg' },
    { name: "Masaje deportivo", time: "30 minutos", price: "23.000", clockIcon: "clock2.svg", moneyIcon: "dinero.svg", categoria: 'Kine', image: 'massage.svg' },
    { name: "Masaje relajante", time: "30 minutos", price: "20.000", clockIcon: "clock2.svg", moneyIcon: "dinero.svg", categoria: 'Maso', image: 'massage.svg' },
    { name: "Masaje post operatorio", time: "30 minutos", price: "20.000", clockIcon: "clock2.svg", moneyIcon: "dinero.svg", categoria: 'Fono', image: 'massage.svg' },
    // Agrega más servicios si es necesario
  ];

}
