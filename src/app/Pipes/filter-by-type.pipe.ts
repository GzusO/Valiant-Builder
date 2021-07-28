import { Pipe, PipeTransform } from '@angular/core';
import { Feature } from '../feature/Feature';
import { Lineage } from '../lineage/Lineage';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(items: Feature[], filter: Lineage[]): Feature[] {
    if (!items || !filter) {
      return items;
    }

    // This will search and match any option.value that contains the search term
    return items.filter(x=> x.types.some((val) => filter.findIndex(y=> y.name===val) !== -1));
  }
}