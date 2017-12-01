import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { ServerService } from "../server.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-race-viewer",
  templateUrl: "./race-viewer.component.html",
  styleUrls: ["./race-viewer.component.css"],
  // providers: [DataService]
})
export class RaceViewerComponent implements OnInit, OnDestroy {
  raceForView = {
    id: 25,
    race_name: "Cebu City Marathon",
    country: "Philippines",
    city: "Cebu",
    official_website: "http://www.cebumarathon.net/",
    race_date: "2018-01-13T16:00:00.000Z"
  };
  subsription: Subscription;
  events = [];
  holidays = [];
  pastWeather;


  constructor(private serverService: ServerService, private dataService: DataService) {
    this.subsription = this.dataService.getRace().subscribe(
      data => {
        this.raceForView = data;
        this.getFurtherInfo(this.raceForView.race_name);
        this.getHolidays(this.raceForView.country);
        this.getPastWeather(this.raceForView.race_name);
      },
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }


  ngOnInit() {
      this.getFurtherInfo(this.raceForView.race_name);
      this.getHolidays(this.raceForView.country);
      this.getPastWeather(this.raceForView.race_name);
  }

  getFurtherInfo(raceName) {
    this.serverService.retrieveEventAndStartTime(raceName)
      .subscribe(
        data => {
          this.events = [];
          data.forEach((event) => {
            const startTimeOrNotice = event.start_time ? event.start_time.substr(0, 5) : null;
            this.events.push({
              type: event.event,
              start_time:  startTimeOrNotice
            });
          });
        },
        error => console.log(error)
      );
  }

  getHolidays(country) {
    this.serverService.retrieveHolidays(country)
      .subscribe(
        data => {
          this.holidays = data;
          this.holidays = this.holidays.filter((holiday) => {
            const raceDate = new Date(this.raceForView.race_date);
            const holidayDate = new Date(holiday.date);
            const dayDiff = this.dataService.calculateDateInterval(raceDate, holidayDate);
            return dayDiff < 30;
          });
          this.holidays.sort(function(a, b){
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            return aDate.getTime() - bDate.getTime();
          });
        },
        error => console.log(error)
      );
  }

  getPastWeather(raceName) {
    this.serverService.retrievePastWeather(raceName)
      .subscribe(
        data => {
          this.pastWeather = data;
          this.pastWeather.sort(function(a, b){
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            return -(aDate.getFullYear() - bDate.getFullYear());
          });
        },
        error => console.log(error)
      );
  }

}
