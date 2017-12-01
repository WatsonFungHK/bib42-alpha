import { Component, OnInit, Input } from "@angular/core";

import { AgmCoreModule } from "@agm/core";

@Component({
  selector: "app-google-map",
  templateUrl: "./google-map.component.html",
  styleUrls: ["./google-map.component.css"]
})
export class GoogleMapComponent implements OnInit {
  @Input("race") race: any;
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
    console.log(this.lat);
    console.log(this.race);
  }

}
