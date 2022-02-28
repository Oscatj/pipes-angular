import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  img = new Promise ((resolve, reject) => {

    resolve("https://www.unad.edu.do/wp-content/uploads/2021/02/Logo-Unad-inicio-1.png")

  })

  constructor() { }

  ngOnInit(): void {
  }

}
