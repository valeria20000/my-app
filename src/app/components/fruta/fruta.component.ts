import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {
  
  
  // Atributos declarar y no inicializar casteando con los dos puntos
  titulo: string;
  frutas: Fruta[];
  preciototal: number;
  nombrefrutas: string[];
  frutasoferta: Fruta[];
  frutaPrimeraOferta: Fruta;
  frutaPrimeraColor: Fruta;


  constructor() {
    console.trace('FrutaComponent constructor');
    this.titulo = 'fruta';
    this.frutas = [];
    this.loadfrutas();
    
    //cojer mas dde un valor {el.precio; }
//si es mas de una sentencia   
this.preciototal = this.frutas.map( f => f.precio).reduce((c, p) => c + p);
this.nombrefrutas = this.frutas.map(el => el.nombre);
this.frutasoferta = this.frutas.filter(f => f.oferta );

//conseguir primera fruta oferta 
this.frutaPrimeraOferta = this.frutas.find( el => el.oferta);
//conseguir primera fruta que este en oferta pero que este en verde
this.frutaPrimeraColor = this.frutas.find(f => f.oferta &&( f.color.find(c => c === "verde") === 'verde'));

   }

  ngOnInit() {

    console.trace('FrutaComponent ngOnInit');
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
    f.img = 'https://www.specialfruit.com/es/thumbnail/productFull/product-1456739596/fresa-calinda.jpg';
    this.frutas.push(f);



    //loadArrayNombreFrutas
  }


}
