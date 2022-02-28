import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  calificacion: number = 7.91788;

  porcentaje: number = 0.40;

  saldo: number = 15000;

  constructor() { }

  ngOnInit(): void {
  }

}
