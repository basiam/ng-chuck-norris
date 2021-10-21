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

  imagePath() {
    const category = this.categories[0];
    const index = this.getNumericId() + 200;
    switch (category) {
      case 'animal':
        return 'http://placekitten.com/' + index + '/' + index;
      case 'food':
        if (index % 7 == 0) {
          return '/assets/images/food.jpeg'
        } else {
          return 'https://lorempixel.com/400/' + index + '/food/';
        }
      default:
        return 'https://placeimg.com/300/200/animals/grayscale';
    }
  }

  getNumericId() {
    return +this.id.match(/\d+/) ? +this.id.match(/\d+/)[0][0] : 7;
  }
}