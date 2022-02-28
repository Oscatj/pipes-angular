import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {

  frutas =["Sandia", "Mango", "Banana", "Uva", "Pera"]

  letras = "abcdefg";

  constructor() { }

  ngOnInit(): void {
  }

}
