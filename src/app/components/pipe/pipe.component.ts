import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']


})
export class PipeComponent implements OnInit {
fecha: Date;
numero: number

  constructor() { 
    this.fecha = new Date();
    this.numero = 3.14163528220;
  }

  ngOnInit() {
  }

}
