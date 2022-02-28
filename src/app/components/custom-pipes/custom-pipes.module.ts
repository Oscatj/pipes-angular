import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustumContainerComponent } from './custum-container/custum-container.component';
import { TemperaturePipe } from 'src/app/shared/pipes/temperature.pipe';

@NgModule({
  declarations: [
    CustumContainerComponent,
    TemperaturePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustumContainerComponent
  ]
})
export class CustomPipesModule { }
