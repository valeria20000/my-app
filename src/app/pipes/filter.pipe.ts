import { Pipe, PipeTransform } from '@angular/core';
import { Fruta } from '../model/fruta';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(frutas: Array<Fruta>, texto: string): Array<Fruta> {
    if(!frutas) return [];
    if(!texto) return frutas;
    texto = texto.toLowerCase();
return frutas.filter( it => {
     // return it.toLowerCase().includes(texto);
    });
   }

}
