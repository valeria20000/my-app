import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../model/Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  endopoint: string = 'http://localhost:3000/tareas';

  constructor(public http: HttpClient) { 
    console.trace('TareaService constructor');
    
  }
  getAll(): Observable<any>{
    console.trace('TareaService getAll ${this.endopoint}');
    return this.http.get(this.endopoint);

  }
add(tarea : Tarea): Observable <any>{
    let body = {
    "titulo": tarea.titulo,
    "terminado": tarea.terminado
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Context-Type': 'application/json'
      })

      
    };
    return this.http.post(this.endopoint, body , httpOptions);
    
  }
  delete(id: number): Observable<any>{
    let uri = this.endopoint + "/" + id
    console.trace(`TareaService delete ${uri}`);
    return this.http.delete(uri);
  }

  marcarterminado(tarea: Tarea): Observable<any>{
    let uri = this.endopoint + "/" + tarea.id;
    console.trace(`TareaService marcar ${uri}`);

    let body = {
      "terminado": !tarea.terminado
      };
      const httpOptions = {
        headers: new HttpHeaders({
          'Context-Type': 'aplication/json'
        })
  
        
      };
      return this.http.patch(uri, body , httpOptions);
      
  }
}
