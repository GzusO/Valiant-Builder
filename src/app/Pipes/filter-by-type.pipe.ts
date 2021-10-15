import { Pipe, PipeTransform } from '@angular/core';
import { Ability } from '../Ability';
import { Lineage } from '../lineage/Lineage';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(items: Ability[], filter: Lineage[]): Ability[] {
    if (!items || !filter) {
      return items;
    }

    // This will search and match any option.value that contains the search term
    return items.filter(x=> x.source.some((val) => filter.findIndex(y=> y.name===val) !== -1));
  }
}