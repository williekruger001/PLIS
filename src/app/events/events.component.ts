import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../mock-events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  titleMain = 'Professional Learning Information System (PLIS)';
  array = [];
  searchResults = [];
  sum = 2;
  throttle = 6;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  showResults = false;
  noOfRecords = 0;

  constructor() { }

  ngOnInit() {
  }

  isLastRegistrationFutureDate(dateValue) {
    var dt = new Date(dateValue);
    var dNow = new Date();
    console.log(dt + ' ' + dNow);
    return dt >= dNow;

  }

  onSearch(value: string) {
    this.array = [];
    this.searchResults = [];
    this.noOfRecords = 0;
    if (value !== '') {
      this.searchResults = EVENTS.filter(myEvent => myEvent.Event_Name.toLowerCase().indexOf(value.toLowerCase()) >= 0);
      this.appendItems(0, this.sum);
    }
    this.showResults = this.searchResults.length > 0;
    this.noOfRecords = this.searchResults.length;
  }

  appendItems(startIndex, endIndex) {
    this.array = this.array.concat(this.searchResults.slice(startIndex, endIndex));
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);

    const start = this.sum;
    this.sum += 5;
    this.appendItems(start, this.sum);

    this.direction = 'down'
  }

}
