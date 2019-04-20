import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather, DailyWeather } from '../models/weather';



const api = environment.weatherurl;

export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  public getWeather() {
    return this.httpClient.get(api);
  }
}
