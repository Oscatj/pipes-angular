import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureValue } from '../enums/temperature.enum';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, tipo: TemperatureValue) {

    let finalValue = value;

    if (tipo === TemperatureValue.F){
     finalValue = value * (9/5) +32
    } 


    return `${finalValue} ° ${tipo}`;
  }

}
