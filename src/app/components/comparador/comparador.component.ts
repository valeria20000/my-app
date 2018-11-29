import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  frutas: Fruta[];
  f1: Fruta;
  f2: Fruta;

  constructor() { 
    this.frutas = [];
    this.f1 = new Fruta();
    this.f2 = new Fruta();
    this.loadfrutas();

    this.f1 =  this.frutas[0];
    this.f2 =  this.frutas[1];

  }

  ngOnInit() {
  }
  seleccionar( fruta: Fruta ) {
    console.trace('ComparadorComponent seleccionar %o', fruta);
    this.f2 = this.f1;
    this.f1 = fruta;
  }

  loadfrutas(): void {

    let f : Fruta = new Fruta;
    f.nombre = 'Detroy';
    f.precio = 3.15;
    f.calorias = 500;
    f.color = ['amarillo', 'negro'];
    f.oferta = true;
    f.descuento = 20;
    f.img='https://images-na.ssl-images-amazon.com/images/I/81rLtmfYG2L._AC_SX215_.jpg';
    this.frutas.push(f);

   f = new Fruta();
  f.nombre = 'Andromeda';
  f.precio = 2;
  f.calorias = 350;
    f.color = ['amarillo', 'verde'];
    f.oferta = false;
    f.descuento = 10;
  f.img = 'https://okdiario.com/img/2017/07/19/juegos-de-playstation-4-mass-effect-andromeda.jpg';
    this.frutas.push(f);

  
    //loadArrayNombreFrutas
  }


}


