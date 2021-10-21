import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placekitten'
})
export class PlacekittenPipe implements PipeTransform {

  transform(value: number): string {
    const index: number = 200 + value;
    return `http://placekitten.com/${index}/${index}`;
  };
}

