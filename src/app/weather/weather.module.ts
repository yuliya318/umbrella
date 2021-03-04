import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPageComponent } from './containers/weather-page/weather-page.component';



@NgModule({
  declarations: [WeatherPageComponent],
  imports: [
    CommonModule
  ],
  exports: [WeatherPageComponent]
})
export class WeatherModule { }
