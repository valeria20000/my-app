import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruta } from '../model/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {
  
  endopoint: string = 'http://localhost:3000/frutas';

  constructor(public http: HttpClient) { 
    console.log('FrutaService constructor');
  }

  getAll(): Observable<any>{
    console.trace('FrutaService getAll ${this.endopoint}');
    return this.http.get(this.endopoint);

  }

  add(fruta : Fruta): Observable <any>{
    let body = {
    "nombre": fruta.nombre,
    "precio": fruta.precio,
    "calorias":fruta.calorias,
    "color": fruta.color,
    "oferta": fruta.oferta,
    "descuento": fruta.descuento,
    "img": fruta.img  
  };
    const httpOptions = {
      headers: new HttpHeaders({
        'Context-Type': 'application/json'
      })

      
    };
    return this.http.post(this.endopoint, body , httpOptions);
    
  }

  
  }

