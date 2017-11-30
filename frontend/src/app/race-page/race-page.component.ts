import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";
import { Router, CanActivate } from "@angular/router";
import { RaceFinderComponent } from "../race-finder/race-finder.component";
import { RaceViewerComponent } from "../race-viewer/race-viewer.component";
import { ServerService } from "../server.service";
import { DataService } from "../data.service";


@Component({
  selector: "app-race-page",
  templateUrl: "./race-page.component.html",
  styleUrls: ["./race-page.component.css"],
  providers: [DataService],
  // directives: [RaceFinderComponent, RaceViewerComponent]
})
export class RacePageComponent implements OnInit {

  constructor(private serverService: ServerService, private http: Http, private router: Router) { }
  ngOnInit() { }

}
