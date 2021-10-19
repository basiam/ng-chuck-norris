import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { repeat, finalize } from 'rxjs/operators';

import { Joke } from './joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  jokesLoaded = new Subject<Joke[]>();
  jokes: Joke[] = []

  constructor(private http: HttpClient) { }

  getJokes() {
    return this.jokes.slice();
  }

  fetchJokes(category: string) {
    this.fetchJoke(category)
      .pipe(
        repeat(5),
        finalize(() => {
          this.jokesLoaded.next(this.getJokes());
        })
      ).subscribe(
        (joke: Joke) => {
          this.jokes.push(joke);
        }
      );

  }

  fetchJoke(category: string) {
    return this.http.get<Joke>(
      'https://api.chucknorris.io/jokes/random?category=' + category
    )
  }
}
