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
  
  delete(id: number): Observable<any>{
    let uri = this.endopoint + "/" + id
    console.trace(`FrutaService delete ${uri}`);
    return this.http.delete(uri);
  }

  getById(id: number):  Observable<any>{
  
    let url = this.endopoint + "/" + id;
    return this.http.get(url);
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

