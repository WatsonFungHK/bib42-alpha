import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";



@Injectable()
export class DataService {
  private subject = new Subject<any>();
  constructor() {  }

  sendRace(race) {
    this.subject.next(race);
  }

  clearRace() {
    this.subject.next();
  }

  getRace(): Observable<any> {
    return this.subject.asObservable();
  }

  calculateDateInterval(date1, date2) {
    // Get 1 day in milliseconds
    const one_day_ms = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    const date1_ms = date1.getTime();
    const date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    const difference_ms = -(date2_ms - date1_ms);
    const days = Math.floor(difference_ms / one_day_ms);
    // console.log("dataService says date interval between two holidays is " + days);
    return days;
    }

}
