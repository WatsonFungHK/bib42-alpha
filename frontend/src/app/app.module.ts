import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { AgmCoreModule } from "@agm/core";


import { AppComponent } from "./app.component";
import { RaceFinderComponent } from "./race-finder/race-finder.component";
import { RaceViewerComponent } from "./race-viewer/race-viewer.component";
import { FilterPipe } from "./filter.pipe";
import { routingComponents, AppRoutingModule } from "./app-routing.module";
import { RacePageComponent } from "./race-page/race-page.component";
import { ServerService } from "./server.service";
import { LandingComponent } from "./landing/landing.component";
import { GoogleMapComponent } from "./google-map/google-map.component";


@NgModule({
  declarations: [
    AppComponent,
    RaceFinderComponent,
    RaceViewerComponent,
    RacePageComponent,
    FilterPipe,
    LandingComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyALXc0hVWCMi4MWjzVW6EcKJklI1ab4QyU"
    })
  ],
  providers: [ServerService, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
