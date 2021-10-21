import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Joke, JokeObject } from './joke.model';
import { JokesSeenService } from './jokes-seen.service';

@Injectable({
  providedIn: 'root'
})
export class JokesAPIService {
  jokes: Joke[] = [];

  constructor(private http: HttpClient, private jokesSeenService: JokesSeenService) { }

  getJokes() {
    return this.jokes.slice();
  }

  fetchJokes(category: string) {
    return forkJoin(
      [...Array(5)].map((_, i) => this.fetchJoke(category))
    ).pipe(
      catchError(this.handleError),
      map((jokes: JokeObject[]) => jokes.map(joke => new Joke(joke.categories, joke.created_at, joke.id, joke.value))),
      tap(jokes => {
        this.jokes = jokes;
        this.jokesSeenService.saveJokes(category, jokes);
      })
    );
  }

  fetchJoke(category: string) {
    // ?s= added as a hack to prevent Safari from using catched request
    return this.http.get<JokeObject>(
      `https://api.chucknorris.io/jokes/random?s=${Math.random()}&category=${category}`
    );
  }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Something went really wrong.';
    if (errorRes.error && errorRes.error.message) {
      errorMessage = errorRes.error.message;
    }
    return throwError(errorMessage);
  }
}
