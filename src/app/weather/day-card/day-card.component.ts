import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Days } from '../../models/days';


@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css'],
  providers: [DatePipe]
})
export class DayCardComponent implements OnInit {

  @Input() day: number;

  dayofweek: object;

  constructor() { }

  ngOnInit() {
    this.dayofweek = new Days(this.day);
    console.log(this.dayofweek);

  }

}
