import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  persona = {
    nomre: "Oscarina",
    edad: 23,
    Ocupacion: "devoloper"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
