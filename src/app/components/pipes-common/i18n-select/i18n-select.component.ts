import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
  styleUrls: ['./i18n-select.component.css']
})
export class I18nSelectComponent implements OnInit {

  gerero= "g"

  mensaje = {
    m : "Bienvenido",
    f: "Bienvenida",
    other: "Este no es un genero"
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
