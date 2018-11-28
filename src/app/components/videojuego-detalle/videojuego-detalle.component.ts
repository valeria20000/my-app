import { Component, OnInit } from "@angular/core";
import { Videojuego } from "src/app/model/videojuego";
import { Persona } from "src/app/model/persona";
import { tipopersona } from "src/app/model/tipopersona";

@Component({
  selector: "app-videojuego-detalle",
  templateUrl: "./videojuego-detalle.component.html",
  styleUrls: ["./videojuego-detalle.component.scss"]
})
export class VideojuegoDetalleComponent implements OnInit {
  titulo: string;
  videojuego: Videojuego;
  personaDefecto: Persona;
  yo: Persona;
  alain: Persona;

  constructor() {
    console.trace("VideojuegoDetalleComponent constructor");
    this.titulo = "Aprendiendo usar clases";
    this.videojuego = new Videojuego();
    //llamamos al setter, siempre que este definido
    this.videojuego.titulo = "Mario Bros";

    this.personaDefecto = new Persona();
    this.personaDefecto.nombre = "Anonimo";
    this.personaDefecto.apellidos = "";
    this.personaDefecto.email = "";
    this.personaDefecto.edad = 16;
    this.personaDefecto.sexo = tipopersona.I;

    this.yo = new Persona();
    this.yo.nombre = "Valeria";
    this.yo.apellidos = "Valencia Bautista";
    this.yo.edad = 28;
    this.yo.email = "Valencia.@hotmail.com";
    this.yo.sexo = tipopersona.F;

    this.alain = new Persona();
    this.alain.nombre = "Alain";
    this.alain.apellidos = "Muñoz";
    this.alain.edad = 28;
    this.alain.email = "alaim@hotmail.com";
    this.alain.sexo = tipopersona.M;
  }

  ngOnInit() {
    console.trace("VideojuegoDetalleComponent ngOnInit");
  }
}
