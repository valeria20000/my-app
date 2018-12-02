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
    f.nombre = 'banana';
    f.precio = 3.15;
    f.calorias = 500;
    f.color = ['amarillo', 'negro'];
    f.oferta = true;
    f.descuento = 20;
    f.img='https://i5.walmartimages.ca/images/Large/580/6_r/875806_R.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'pera';
    f.precio = 2;
    f.calorias = 350;
    f.color = ['amarillo', 'verde'];
    f.oferta = false;
    f.descuento = 10;
    f.img = 'http://www.haciendasbio.com/63-large_default/peras.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'fresa';
    f.precio = 0.75;
    f.calorias = 100;
    f.color = ['rosa', 'rojo', 'verde'];
    f.oferta = true;
    f.descuento = 5;
    f.img = 'http://asipasa.com/media/i/17d1b48e-554a-11e2-8fa7-3c4a92dfe5a8.jpg';
    this.frutas.push(f);

  }


}


