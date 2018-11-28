import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Persona } from 'src/app/model/persona';
import { tipopersona } from 'src/app/model/tipopersona';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']


})
export class PipeComponent implements OnInit {
fecha: Date;
numero: number
videojuegos: Videojuego[];
personas: Persona[];



  constructor() { 
    this.fecha = new Date();
    this.numero = 3.14163528220;
    this.videojuegos = [];
    this.loadVideojuegos();
    this.personas = [];
    this.loadPersonas();

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

  loadPersonas():void
  {
    let p : Persona = new Persona;
    p.nombre = 'Victor';
    p.apellidos = 'Valencia Bautista';
    p.edad = 32;
    p.email = 'vale@hprasd.com';
    p.sexo = tipopersona.M;
    this.personas.push(p);

    p = new Persona;
    p.nombre = 'sdfgh';
    p.apellidos = 'fgfdgh fghghhg';
    p.edad = 38;
    p.email = 'vale@hpdfrasd.com';
    p.sexo = tipopersona.F;
    this.personas.push(p);

    p = new Persona;
    p.nombre = 'dsfgh';
    p.apellidos = 'dsfg fghgyyhhg';
    p.edad = 98;
    p.email = 'vale@hpdsdfgfrasd.com';
    p.sexo = tipopersona.I;
    this.personas.push(p);

  }

}
