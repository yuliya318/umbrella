import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherInfo } from '../../interfaces/weather-info.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit, OnDestroy {
  public weatherInfo: WeatherInfo;
  private weatherInfoSubcription: Subscription;
  public iconUrl: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  ngOnDestroy(): void {
    this.weatherInfoSubcription.unsubscribe();
  }

  getLocation(): any {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.getWeatherByCoordinates(latitude, longitude);
    });
  }

  getWeatherByCoordinates(latitude: number, longitude: number): void {
    this.weatherInfoSubcription = this.weatherService
      .getWeatherByCoordinates(latitude, longitude)
      .subscribe((response) => {
        this.weatherInfo = response;
        this.setWeatherIconUrl(response.weather[0].icon);
      });
  }

  getWeatherByCityName(city: string): void {
    this.weatherInfoSubcription = this.weatherService
      .getWeatherByCityName(city)
      .subscribe((response) => {
        this.weatherInfo = response;
        this.setWeatherIconUrl(response.weather[0].icon);
      });
  }

  setWeatherIconUrl(iconID: string): void {
    this.iconUrl = `${environment.iconUrl}img/wn/${iconID}@2x.png`;
    console.log(this.iconUrl);
  }
}
