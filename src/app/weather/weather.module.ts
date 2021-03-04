import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPageComponent } from './containers/weather-page/weather-page.component';
import { HeaderModule } from '../shared/modules/header/header.module';



@NgModule({
  declarations: [WeatherPageComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [WeatherPageComponent]
})
export class WeatherModule { }
