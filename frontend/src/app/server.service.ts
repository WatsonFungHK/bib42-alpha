import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment }    from '../environments/environment';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  // retrieveDataFromPsqlTableOf(tableName) {
  //   const httpRequestUrl: string = environment.url + '/api/' + tableName
  //   console.log(httpRequestUrl)
  //   return this.http.get(httpRequestUrl)
  //     .map(
  //       (response: Response) => {
  //         const data = response.json()
  //         return data
  //       }
  //     )
  // }
  retrieveBasicInfo(term: string): Observable<any> {
    return this.http.get(environment.url + '/api/race_basic_info')
      .map(
        (response: Response) => {
          const data = response.json()
          // console.log(data)
          return data
          // return data.filter((race) => {
          //   return race.race_name.toLowerCase()
          //     .includes(term.toLowerCase())
          // })
        }
      )
  }
}
