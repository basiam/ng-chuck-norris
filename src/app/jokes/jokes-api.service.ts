import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { repeat, finalize, catchError } from 'rxjs/operators';

import { Joke } from './joke.model';
import { JokesSeenService } from './jokes-seen.service';

@Injectable({
  providedIn: 'root'
})
export class JokesAPIService {
  jokesLoaded = new Subject<Joke[]>();
  jokes: Joke[] = [];

  constructor(private http: HttpClient, private jokesSeenService: JokesSeenService,) { }

  getJokes() {
    return this.jokes.slice();
  }

  fetchJokes(category: string) {
    this.jokes = [];
    this.fetchJoke(category)
      .pipe(
        catchError(this.handleError),
        repeat(5),
        finalize(() => {
          this.jokesLoaded.next(this.getJokes());
          this.jokesSeenService.saveJokes(category, this.getJokes());
        }),
      ).subscribe((joke: Joke) => {
        this.jokes.push(joke);
      }, (error) => {
        this.jokesLoaded.error(error);
      });
  }

  fetchJoke(category: string) {
    return this.http.get<Joke>(
      'https://api.chucknorris.io/jokes/random?category=' + category
    )
  }

  onFinish() {
    this.jokesLoaded.next(this.getJokes());
  }


  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Chuck Norris can compile syntax errors. But something went wrong.'
    if (errorRes.error && errorRes.error.message) {
      errorMessage = errorRes.error.message;
    }
    return throwError(errorMessage);
  }
}
