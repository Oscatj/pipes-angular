import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.css']
})
export class I18nPluralComponent implements OnInit {

  notificaciones = 0;

  mensajes = {
    "=0" : "No tienes notificaciones",
    "=1" : "Tines # notificacion",
    "other": "Tienes # notificaciones"
  }

  constructor() { }

  ngOnInit(): void {
  }
  addNotificaciones() {
    this.notificaciones++;
  }

}
