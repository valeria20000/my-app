import { Pipe, PipeTransform } from '@angular/core';
import { Fruta } from '../model/fruta';

@Pipe({
  name: 'filterOferta'
})
export class FilterOfertaPipe implements PipeTransform {

  transform(frutas: Array<Fruta>, oferta: boolean): Array<Fruta> {
    if(oferta){
      return frutas.filter(fruta => fruta.oferta);
    }else{
      return frutas;
    }
  }

}
