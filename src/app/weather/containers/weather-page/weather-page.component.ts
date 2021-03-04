import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit {
  public iconUrl = 'http://openweathermap.org/img/wn/10d@2x.png';
  
  constructor() {}

  ngOnInit(): void {
  }

}
