import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css']
})
export class KeyValueComponent implements OnInit {

  constructor() { }

persona = {
  nomre: "Oscarina",
  edad: 23,
  Ocupacion: "devoloper"

}

  ngOnInit(): void {
  }

}
