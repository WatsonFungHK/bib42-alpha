import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'



@Injectable()
export class DataService {
  private subject = new Subject<any>()
  constructor() {  }

  sendRace(race) {
    this.subject.next(race)
  }

  clearRace() {
    this.subject.next()
  }

  getRace(): Observable<any>{
    return this.subject.asObservable()
  }

}
