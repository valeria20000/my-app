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

  
  }

