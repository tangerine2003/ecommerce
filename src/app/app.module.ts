import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DayCardComponent } from './weather/day-card/day-card.component';

import { CardModule } from 'primeng/card';


import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GardenComponent } from './garden/garden.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    NavbarComponent,
    DayCardComponent,
    HomeComponent,
    GardenComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
