import { Injectable } from '@angular/core';
import { Joke, JokeObject } from './joke.model';


@Injectable({
  providedIn: 'root'
})
export class JokesSeenService {
  jokesByCategory: { [category: string]: Joke[] } = {};
  constructor() { }

  getJokes(category: string) {
    const oldJokes = localStorage.getItem(category);
    if (!oldJokes) return [];

    this.jokesByCategory[category] = JSON.parse(oldJokes).map((x: JokeObject) => new Joke(x.categories, x.created_at, x.id, x.value));
    return this.jokesByCategory[category];
  }

  saveJokes(category: string, jokes: Joke[]) {
    const storedJokes = this.jokesByCategory[category] || [];
    for (let i = 0; i < jokes.length; i++) {
      if (!storedJokes.some((e) => e.id === jokes[i].id)) {
        storedJokes.push(jokes[i]);
      }
    }
    localStorage.setItem(category, JSON.stringify(storedJokes));
  }
}
