import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {

  transform(races: any[], term: string): any {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
    term = term.toLowerCase();
    if ( term === "") {
      return races;
    }
    return races.filter( race => {
      // tslint:disable-next-line:radix
      const monthIdx = parseInt(race.race_date.split("-")[1]) - 1;
      const monthString = month[monthIdx];
      console.log(`${race.race_name} ${race.race_date}: ${monthString} ${monthIdx}`);
      return  race.race_name.toLowerCase().includes(term) ||
              race.city.toLowerCase().includes(term) ||
              race.country.toLowerCase().includes(term) ||
              monthString.toLowerCase().includes(term);
    });
  }

}
