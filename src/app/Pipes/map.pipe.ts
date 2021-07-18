import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform(input: any[], key: string): any {
    return input.map(e => e[key]);
  }

}
