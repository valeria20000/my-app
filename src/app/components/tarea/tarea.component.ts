import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/providers/tarea.service';
import { Tarea } from 'src/app/model/Tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  tareas: Tarea[];
  nueva: string;
  todas: boolean;
  textoFiltro: string;

  constructor( public tareaService: TareaService) { 
    console.trace('TareaComponent constructor');
this.tareas = [];
this.nueva = '';
this.todas = true;
this.textoFiltro = 'Todas';

  }

  ngOnInit() {
    this.recargarLista();
    
  }
  filtrar(){
    this.todas = !this.todas;
    this.textoFiltro = (this.todas)? 'Todas':'Pendientes';
  }
  recargarLista(){

    console.trace('TareaComponent ngOnInit');
    //llamar al servicio para carga inicial de las tareas, No hacerlo en el constructor
    // Como el servicio retorna un Observable , debemos subscribirnos 
    this.tareaService.getAll().subscribe(data =>{
      console.debug('datos recibidos %o', data);
      this.tareas = data.map( el => el);
    });
    
  }
  nuevaTarea(){
    console.trace('TareaComponent nuevaTarea' + this.nueva);

    let tarea = new Tarea();
    tarea.titulo = this.nueva;
    this.tareaService.add( tarea ).subscribe (data =>{
      console.debug(data);
      this.recargarLista();
      this.nueva = "";
    });

    }

    eliminar (id:number){
      console.trace(`TareaComponent `);
      this.tareaService.delete(id).subscribe(data =>{
      console.debug('data %o', data);
      this.recargarLista();
      });
    }

    terminar(tarea: Tarea){
      console.trace(`TareaComponent terminar %o, tarea`);
      this.tareaService.marcarterminado(tarea).subscribe(data => {
console.debug('data %o', data);
this.recargarLista();
      });
    }
}
