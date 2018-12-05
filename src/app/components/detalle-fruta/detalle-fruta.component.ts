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
  id: number;

  constructor(private frutaService: FrutaService , private route: ActivatedRoute  ) {
    this.id = 0; 
  
    
   }
   sumitar() {

    
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.frutaService.getById(this.id).subscribe(data =>{
     
   if( data != undefined){
     this.formulario.controls.nombre.setValue(data.nombre);
     this.formulario.controls.precio.setValue(data.precio);
     this.formulario.controls.calorias.setValue(data.calorias);
     this.formulario.controls.color.setValue(data.color);
     this.formulario.controls.oferta.setValue(data.oferta);
     this.formulario.controls.descuento.setValue(data.descuento);
     this.formulario.controls.img.setValue(data.img);
   }
      
      });
      
       // (+) converts string 'id' to a number
      // llamar provider para conseguir datos a traves del id
    
   });
    
  }

   ngOnInit() {
    //recoger parameros aqui, No constructor
  }
  

}
