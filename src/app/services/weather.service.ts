import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const api = environment.weatherurl;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  public getWeather(lat, lng) {
    return this.httpClient.get(api + lat + ',' + lng)
    .subscribe(responseData => console.log(responseData));
  }
}
