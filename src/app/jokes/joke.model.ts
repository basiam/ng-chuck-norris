const SHOW_CHUCK_NUMER = 7;
const DEFAULT_INDEX = 44;

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
      return `http://placekitten.com/${index}/${index}`;
    case 'food':
      if (index % SHOW_CHUCK_NUMER == 0) {
        return '/assets/images/food.jpeg';
      }
      return `https://lorempixel.com/400/${index}/food/`;

    default:
      return 'https://placeimg.com/300/200/animals/grayscale';
    }
  }

  getNumericId() {
    return +this.id.match(/\d+/) ? +this.id.match(/\d+/)[0].slice(0, 2) : DEFAULT_INDEX;
  }
}