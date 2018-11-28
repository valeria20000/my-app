import { Pipe, PipeTransform } from '@angular/core';
import { tipopersona } from '../model/tipopersona';




@Pipe({
  name: 'sexo'
})
export class PersonaPipe implements PipeTransform {

  transform(tipopersona: tipopersona, sexo: any): any {
    return null;
  }

}
