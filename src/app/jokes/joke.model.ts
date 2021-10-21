export interface JokeObject {
  categories: string[];
  created_at: string;
  id: string;
  value: string;
}

export class Joke implements JokeObject {

  constructor(
    public categories: string[],
    public created_at: string,
    public id: string,
    public value: string
  ) { }

  imagePath(offset: number) {
    const category = this.categories[0];
    const index = 200 + offset;
    switch (category) {
      case 'animal':
        return 'http://placekitten.com/' + index + '/' + index;
      case 'food':
        return 'https://lorempixel.com/400/' + index + '/food/';
      default:
        return 'https://placeimg.com/300/200/animals/grayscale';
    }
  }
}