import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms"; // gestionar formulario
import { Fruta } from "src/app/model/fruta";
import { FrutaService } from "src/app/providers/fruta.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"]
})
export class FormularioComponent implements OnInit {
  nombre: FormControl; //control o input del formulario
  formulario: FormGroup; //formulario para agrupar input == FormsControl

  constructor(public frutaService: FrutaService) {
    console.trace("FormularioComponent constructor");

    //agrupacion de controlers == formulario
    this.formulario = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      precio: new FormControl("0", [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(5)
      ]),
      calorias: new FormControl("0", [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(5)
      ]),
      color: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      oferta: new FormControl(false, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(5)
      ]),
      descuento: new FormControl("0", [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(5)
      ]),
      img: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
   
      ])
    });
  }

  ngOnInit() {
    console.trace("FormularioComponent ngOnInit");
  }

  caragarFormulario() {
    this.formulario.controls.nombre.setValue("fresa");
    this.formulario.controls.precio.setValue(1.45);
  }

  sumitar() {
    console.trace("FormularioComponent sumitar %o", this.formulario);
    let fruta = new Fruta();
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.color = this.formulario.controls.color.value;
    fruta.oferta = this.formulario.controls.oferta.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.img = this.formulario.controls.img.value;

    this.frutaService.add(fruta).subscribe(data => {
      console.debug(data);
    });
  }
}
