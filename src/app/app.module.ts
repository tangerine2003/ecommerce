import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { DayCardComponent } from './weather/day-card/day-card.component';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
