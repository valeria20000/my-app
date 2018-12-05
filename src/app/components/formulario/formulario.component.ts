import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms"; // gestionar formulario
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
  colores: FormArray; //Array 

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
        Validators.min(0.1),
        Validators.max(999)
      ]),
      calorias: new FormControl("0", [
        Validators.required,
        Validators.min(0.1),
        Validators.max(9999)
      ]),
      oferta: new FormControl(false, [
        Validators.required
      ]),
      descuento: new FormControl("0", [
        Validators.required,
        Validators.min(5),
        Validators.max(90)
      ]),
      img: new FormControl('https://picsum.photos/300/300/?image=1057', [
        Validators.required,
        Validators.pattern('^(http(s?):\/\/).+(\.(jpg|png|jpeg))$') //que comience en http o https y que termine en jpg o png p jpeg
      ]),
      colores: new FormArray([this. crearColorFormGroup()], Validators.minLength(1))
    });


  }

  ngOnInit() {
    console.trace("FormularioComponent ngOnInit");
  }
  crearColorFormGroup(): FormGroup{

    return new FormGroup({
  color: new FormControl('verde', 
                        [Validators.required,
                        Validators.minLength(2),
                        Validators.maxLength(15)
                        
                        ])
  });
  }

  nuevoColor(){
    let arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFormGroup());
  }

  eliminarColor( index: number){
    let arrayColores = this.formulario.get('colores') as FormArray;
    if ( arrayColores.length > 1 ){
      arrayColores.removeAt(index);
    }  
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
