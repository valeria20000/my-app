import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']


})
export class PipeComponent implements OnInit {
fecha: Date;
numero: number
videojuegos: Videojuego[];


  constructor() { 
    this.fecha = new Date();
    this.numero = 3.14163528220;
    this.videojuegos = [];
    this.loadVideojuegos();

  }

  ngOnInit() {
  }
  loadVideojuegos(): void{
    
    let v : Videojuego = new Videojuego;
    v.titulo = 'Mario Bross';
    v.alquilado = true;
    this.videojuegos.push(v);


    v = new Videojuego;
    v.titulo = 'Donkey Komg';
    v.alquilado = true;
    this.videojuegos.push(v);

    v = new Videojuego;
    v.titulo = 'Zelda';
    v.alquilado = false;
    this.videojuegos.push(v);

    v = new Videojuego;
    v.titulo = 'Space Invader';
    v.alquilado = false;
    this.videojuegos.push(v);
  }

}
