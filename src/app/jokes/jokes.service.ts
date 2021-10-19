import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { repeat, finalize } from 'rxjs/operators';

import { Joke } from './joke.model';

const CATEGORIES = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
];

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  jokesLoaded = new Subject<Joke[]>();
  jokesByCategory: { [category: string]: Joke[] } = {};

  constructor(private http: HttpClient) { }

  getJokes(category: string) {
    console.log(this.jokesByCategory);
    return this.jokesByCategory[category] ? this.jokesByCategory[category].slice() : [];
  }

  fetchJokes(category: string) {
    this.fetchJoke(category)
      .pipe(
        repeat(5),
        finalize(() => {
          this.jokesLoaded.next(this.getJokes(category));
        })
      ).subscribe((joke: Joke) => {
        if (this.jokesByCategory[category]) {
          this.jokesByCategory[category].push(joke);
        } else {
          this.jokesByCategory[category] = [joke];
        }
      });

  }

  fetchJoke(category: string) {
    return this.http.get<Joke>(
      'https://api.chucknorris.io/jokes/random?category=' + category
    )
  }
}
