import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {

  texto: string = "tiTUlo dE aPliCAcion";

  constructor() { }

  ngOnInit(): void {
  }

}
