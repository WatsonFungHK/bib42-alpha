import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(races: any, term: any): any {
    term = term.toLowerCase()
    if ( term == '') return races
    return races.filter( race => {
      return  race.race_name.toLowerCase().includes(term) ||
              race.city.toLowerCase().includes(term) ||
              race.country.toLowerCase().includes(term)
    })
  }

}
