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
    console.log(apiUrl);
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
    return this.http.get(apiUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }

}
