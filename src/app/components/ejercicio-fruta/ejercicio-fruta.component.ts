import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-fruta',
  templateUrl: './ejercicio-fruta.component.html',
  styleUrls: ['./ejercicio-fruta.component.scss']
})
export class EjercicioFrutaComponent implements OnInit {
   // Atributos declarar y no inicializar
   titulo: string;
   frutas: string[];

  constructor() {
    
    console.trace('FrutaComponent constructor');
    this.titulo = 'fruta';
    this.frutas = ['fresa', 'platano', 'mango', 'kiwi'];
  }

  ngOnInit() {
    console.trace('FrutaComponent ngOnInit');
  }

}

