import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Fruta } from 'src/app/model/fruta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-fruta',
  templateUrl: './crud-fruta.component.html',
  styleUrls: ['./crud-fruta.component.scss']
})
export class CrudFrutaComponent implements OnInit {
  frutas: Fruta[];
  

  constructor(public frutaService: FrutaService, private route: ActivatedRoute) {
    this.frutas = [];
   }

  ngOnInit() {
    this.recargarLista();
  }
  recargarLista(){

    this.frutaService.getAll().subscribe(data =>{
      this.frutas = data.map( el => el);
    });
    
  }
  
  eliminar (id:number){
    console.trace(`CrudFrutaComponent `);
    this.frutaService.delete(id).subscribe(data =>{
    console.debug('data %o', data);
    this.recargarLista();
    });
  }

}
