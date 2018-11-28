import { Pipe, PipeTransform } from '@angular/core';
import { tipopersona } from '../model/tipopersona';
import { Persona } from '../model/persona';




@Pipe({
  name: 'sexo'
})
export class PersonaPipe implements PipeTransform {

  transform(personas: Persona[], sexo: tipopersona): any {
    const resul: Persona[] = [];

    personas.forEach(el => {
      if(el.sexo === sexo){
        resul.push(el);
      }
    });
    return resul;
  }

}
