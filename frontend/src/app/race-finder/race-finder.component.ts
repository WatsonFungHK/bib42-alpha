import { Component, OnInit, Input } from "@angular/core";
import { FilterPipe } from "../filter.pipe";
import { ServerService } from "../server.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-race-finder",
  templateUrl: "./race-finder.component.html",
  styleUrls: ["./race-finder.component.css"],
  // providers: [DataService]
})
export class RaceFinderComponent implements OnInit {
  races = [];
  raceClicked = {
    id: 58,
    race_name: "haha New Taipei City Wan Jin Shi Marathon",
    country: "Taiwan",
    city: "Taipei City",
    official_website: "http://www.shonan-kokusai.jp/12th/",
    race_date: "2018-03-17T16:00:00.000Z"
  };
  term = "";
  termArray = [
    "Japan", "Beijing", "Taiwan", "hong kong", "Thailand", "North Korea"
    "January", "International marathon", "Half marathon",
    "trail", "city",
    "100"
  ];
  constructor(private serverService: ServerService, private dataService: DataService) {
  }

  ngOnInit() {
    this.getRace_basic_info();
  }

  surpriseUser() {
    this.term = this.termArray[Math.floor(Math.random() * this.termArray.length)];
  }

  raceOnClicked(race) {
    this.raceClicked = race;
    // console.log("raceOnClicked() with " + this.raceClicked.race_name);
    // console.log(this.raceClicked )
    this.dataService.sendRace(this.raceClicked);
  }

  getRace_basic_info() {
    this.serverService.retrieveBasicInfo()
      .subscribe(
        (data: any[]) => {
          this.races = data;
          this.races.forEach((race) => {
            race.country = race.country.replace("-", " ");
            race.city = race.city.replace("-", " ");
          });
          this.raceClicked = this.races[Math.floor(Math.random() * this.races.length)];
        },
        error => console.log(error)
      );
  }


}
