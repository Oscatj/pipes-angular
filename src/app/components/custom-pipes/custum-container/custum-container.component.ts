import { Component, OnInit } from '@angular/core';
import { TemperatureValue } from 'src/app/shared/enums/temperature.enum';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-custum-container',
  templateUrl: './custum-container.component.html',
  styleUrls: ['./custum-container.component.css']
})
export class CustumContainerComponent implements OnInit {

  grado: number = 12;

  tipo: TemperatureValue = TemperatureValue.F;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
  }
  get dark () {
    return this.darkModeService.dark;
  }
  
  changeMode(){
    this.darkModeService.changeMode();
  }
}
