import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { WeatherInfo } from '../interfaces/weather-info.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByCoordinates(latitude: number, longitude: number): Observable<WeatherInfo> {
    const fullUrl = `${environment.apiUrl}data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${environment.apiKey}`;
    return this.http
      .get(fullUrl)
      .pipe(map((response: any) => response));
  }

}

