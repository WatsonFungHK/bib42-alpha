import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(races: any, term: any): any {
    if ( term == '') return races
    return races.filter( race => {
      return  race.race_name.toLowerCase().includes(term.toLowerCase()) ||
              race.city.toLowerCase().includes(term.toLowerCase()) ||
              race.country.toLowerCase().includes(term.toLowerCase())
    })
  }

}
