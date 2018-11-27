import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo-informacion',
  templateUrl: './flujo-informacion.component.html',
  styleUrls: ['./flujo-informacion.component.scss']
})
export class FlujoInformacionComponent implements OnInit {
  titulo: string;
  visible: boolean;
  clase: string;
  textoBotton: string;
  nombre: string;

  constructor() {
    console.trace('FlujoInformacionComponent constructor');
    this.titulo = 'Flujo de la informacion en la Vista Modelo y Vista Modelo';
    this.visible = true;
    this.clase = 'remarcar2';
    this.textoBotton = 'Ocultar';
    this.nombre = '';
  }

  ngOnInit() {
    console.trace('FlujoInformacionComponent ngOnInit');
  }

  showHide() {
    console.trace('Click shoHide button');
  this.visible = (this.visible) ? false : true;
  this.textoBotton = (this.visible) ? 'Ocultar' : 'Mostrar';
  }
}
