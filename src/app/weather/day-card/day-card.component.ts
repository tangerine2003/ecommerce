import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css'],
  providers: [DatePipe]
})
export class DayCardComponent implements OnInit {

  dayofweek: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
