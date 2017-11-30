import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  transform(races: any[], term: string): any {
    term = term.toLowerCase();
    if ( term === "") {
      return races;
    }
    return races.filter( race => {
      // // tslint:disable-next-line:radix
      // const monthIdx = parseInt(race.race_date.split("-")[1]);
      // console.log(monthIdx + typeof(monthIdx));
      // const monthName = this.month[monthIdx];
      // const monthName: string = race.race_date.getLongMonth();
      // console.log(monthName);
      return  race.race_name.toLowerCase().includes(term) ||
              race.city.toLowerCase().includes(term) ||
              race.country.toLowerCase().includes(term)
              ;
              // ||
              // monthName.includes(term);
    });
  }

}
