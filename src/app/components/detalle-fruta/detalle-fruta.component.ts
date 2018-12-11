import { Fruta } from './../../model/fruta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrutaService } from 'src/app/providers/fruta.service';
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-detalle-fruta',
  templateUrl: './detalle-fruta.component.html',
  styleUrls: ['./detalle-fruta.component.scss']
})
export class DetalleFrutaComponent implements OnInit {

  formulario: FormGroup;
  fruta: Fruta = new Fruta();
  color: FormArray;
  mensaje: string;

  constructor(private frutaService: FrutaService, private route: ActivatedRoute) {
    this.fruta.id = 0;

    this.resetForm();
  }

  resetForm(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      precio: new FormControl('', [Validators.required, Validators.min(0.1), Validators.max(999)]),
      calorias: new FormControl('', [Validators.required, Validators.min(0.1), Validators.max(9999)]),
      oferta: new FormControl(false),
      descuento: new FormControl('5'),
      img: new FormControl('https://picsum.photos/300/300/?random', [Validators.required, Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')]),
      color: new FormArray([this.crearColorFormGroup(), this.crearColorFormGroup()], Validators.minLength(1))
    });
  }

  ngOnInit() {
    //recoger parameros aqui, No constructor
    this.route.params.subscribe(params => {
      this.fruta.id = +params['id'];
      if (this.fruta.id > 0) {
        this.detalleFruta(this.fruta.id);

      }
    });

  }

  detalleFruta(id) {
    this.frutaService.getById(id).subscribe(data => {
      this.fruta = data;
      this.cargarFormulario(this.fruta);

    });

  }


  crearColorFormGroup(): FormGroup {
    return new FormGroup({
      colores: new FormControl('verde', [Validators.required, Validators.minLength(2), Validators.maxLength(15)])

    });
  }

  nuevoColor() {
    let arrayColores = this.formulario.get('color') as FormArray;
    arrayColores.push(this.crearColorFormGroup());
  }

  eliminarColor(index: number) {
    let arrayColores = this.formulario.get('color') as FormArray;
    if (arrayColores.length > 1) {
      arrayColores.removeAt(index);
    }
  }

  cargarFormulario(fruta: Fruta) {
    console.trace('FormularioComponent cargarFormulario');
    this.formulario.controls.nombre.setValue(fruta.nombre);
    this.formulario.controls.precio.setValue(fruta.precio);
    this.formulario.controls.calorias.setValue(fruta.calorias);
    this.formulario.controls.oferta.setValue(fruta.oferta);
    this.formulario.controls.descuento.setValue(fruta.descuento);
    this.formulario.controls.img.setValue(fruta.img);
    const arrayColores = new FormArray([]) as FormArray;

    this.fruta.color.forEach(c => {
      arrayColores.push(new FormGroup({colores: new FormControl(c,[Validators.required,Validators.minLength(2),Validators.maxLength(15)])}));
    });

    this.formulario.setControl('color' , arrayColores);

  }

  crear() {
    let fruta = new Fruta();
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value; 7
    //Si la oferta esta activa aplicamos el descuento caso contrario no 
    fruta.oferta = this.formulario.controls.oferta.value;
    if(this.formulario.controls.oferta.value){
      fruta.descuento = this.formulario.controls.descuento.value;
    }else{
      fruta.descuento = 0;
    }
    fruta.img= this.formulario.controls.img.value;

    const arrayColores = this.formulario.get('color') as FormArray;

    arrayColores.controls.forEach(color => {
      const colorFormControl = color.value.colores;
      fruta.color.push(colorFormControl);
    });

    this.frutaService.add(fruta).subscribe(data => {
      this.mensaje = "Creado correctamente fruta";
      this.resetForm();
    });

  }

  modificar() {
    let fruta = new Fruta();
    fruta.id = this.fruta.id;
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value; 
    //Si la oferta esta activa aplicamos el descuento caso contrario no 
    fruta.oferta = this.formulario.controls.oferta.value;
    if(this.formulario.controls.oferta.value){
      fruta.descuento = this.formulario.controls.descuento.value;
    }else{
      fruta.descuento = 0;
    }
    fruta.img= this.formulario.controls.img.value;
    const arrayColores = this.formulario.get('color') as FormArray;

    arrayColores.controls.forEach(color => {
      const colorFormControl = color.value.colores;
      fruta.color.push(colorFormControl);
    });

    this.frutaService.update(fruta).subscribe(data => {
      console.debug('data %o', data);
      this.mensaje = "Modificado correctamente fruta";
    });
  }



  sumitar() {
    if (this.fruta.id > 0) {
      this.modificar();
    } else {
      this.crear();
    }

  }




}
