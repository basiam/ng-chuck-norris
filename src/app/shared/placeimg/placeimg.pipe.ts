import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeimg'
})
export class PlaceimgPipe implements PipeTransform {

  transform(category: string, id: number): string {
    const index: number = 200 + id;
    switch (category) {
      case 'history':
        return 'https://placeimg.com/400/' + index + '/arch/grayscale';
      case 'animal':
        return 'http://placekitten.com/' + index + '/' + index;
      default:
        return 'https://placeimg.com/200/200/people/grayscale';
    }
  };

}
