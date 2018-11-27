import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent implements OnInit {
  alumnos: string[];

  constructor() {
    console.trace('ClaseComponent constructor');
    this.alumnos = ['valeria', 'pepe', 'andrea', 'adriana'];
  }

  ngOnInit() {
    console.trace('ClaseComponent ngOnInit');
  }

}
