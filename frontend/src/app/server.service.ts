import { Injectable }     from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment }    from "../environments/environment";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  retrieveBasicInfo(): Observable<any> {
    const apiUrl = environment.url + "/api/race_basic_info";
    return this.http.get(apiUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  retrieveEventAndStartTime(raceName: string) {
    const apiUrl = environment.url + "/api/eventandstarttime/" + raceName.replace(/\s/g, "%20");
    console.log(apiUrl);
    return this.http.get(apiUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  retrievePastWeather(raceName: string) {
    const apiUrl = environment.url + "/api/pastweather/" + raceName.replace(/\s/g, "%20");
    return this.http.get(apiUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  retrieveHolidays(countryName: string) {
    const apiUrl = environment.url + "/api/holidays/" + countryName.replace(/\s/g, "%20").toLowerCase();
    console.log(apiUrl);
    return this.http.get(apiUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

  queryGoogleMapLatAndLng(city, country) {
    // tslint:disable-next-line:max-line-length
    const apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + city.replace(" ", "%20") + "+" + country.replace(" ", "%20");
    console.log(apiUrl);
    return this.http.get(apiUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          const latLngObj = data.results[0].geometry.location;
          console.log(latLngObj);
          return latLngObj;
        }
      );
  }

}
