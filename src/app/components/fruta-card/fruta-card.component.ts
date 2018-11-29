import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

  fruta: Fruta;


  constructor() {
console.trace('FrutaCardComponent contructor');

this.fruta = new Fruta();
this.fruta.nombre = 'Malacaton';
this.fruta.calorias = 17.4;
this.fruta.precio = 3.45;
this.fruta.oferta = true;
this.fruta.descuento = 10;
this.fruta.img = 'http://frutasfontellas.es/wp-content/uploads/2013/06/Melocoton-600.jpg';

   }

  ngOnInit() {
  }
  comprar(event: Event){
    //Todo hacerlo con a
    //event.preventDefault();
    alert('Lo sentimos pero de momento tenemos esta opcion desabilitada ## ${this.fruta.nombre}');
  }

}
