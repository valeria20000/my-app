import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {
  
  frutas: Fruta[];
  f1: Fruta;
  f2: Fruta;
  productos: Array<Fruta> = [];
  total: number;
  carro: Fruta[];


  //FrutaService es @Injectable por el cual debemos declararlo en el constuctor , nunca haremos new y no usarlo dentro del constructoe mejor en el ngOninit
  constructor( public frutaService: FrutaService) {
    this.frutas = [];
    this.f1 = new Fruta();
    this.f2 = new Fruta();
    this.carro = [];
    this.total = 0;


  }

  ngOnInit() {
    this.frutaService.getAll().subscribe(data =>{
      console.debug('datos recibidos %o', data);
      this.frutas = data.map(el => el );
    
    this.f1 =  this.frutas[0];
    this.f2 =  this.frutas[1];
    
    });
  }
  seleccionar( fruta: Fruta ) {
    console.trace('ComparadorComponent seleccionar %o', fruta);
    this.f2 = this.f1;
    this.f1 = fruta;
  }
  actualizarCarro(event : Event){
    const fruta: Fruta = event['frutaClick'];

    this.carro.push(fruta);
    let precio: number = 0;
    if(fruta.oferta){
      precio = fruta.precio - (fruta.precio * fruta.descuento)/100
    }else{
      precio = fruta.precio;
    }
    
    
    this.total = this.total + precio;
    console.debug('ComparadorComponent actualizarCarro recibimos evento del componente hijo');
    console.debug('Parametro frutaClick = %o', event['frutaClick']);




  }
  masCantidad(event: Event){


   
     
  }

  
  

}