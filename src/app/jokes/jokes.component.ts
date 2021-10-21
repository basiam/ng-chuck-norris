import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Joke } from './joke.model';
import { JokesAPIService } from './jokes-api.service';
import { JokesSeenService } from './jokes-seen.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit, OnDestroy {
  jokes: Joke[] = [];
  oldJokes: Joke[] = [];
  subscription: Subscription;
  jokesAreLoading: boolean = true;
  oldJokesAreLoading: boolean = true;
  error: string;
  category: string;

  constructor(
    private jokesAPIService: JokesAPIService,
    private jokesSeenService: JokesSeenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.category = this.router.url.split('/')[1];

    this.subscription = this.jokesAPIService.fetchJokes(this.category)
      .subscribe(
        (jokes: Joke[]) => {
          this.jokes = jokes;
          this.jokesAreLoading = false;
        },
        (errorMessage) => {
          this.jokesAreLoading = false;
          this.error = errorMessage;
        }
      );

    this.oldJokes = this.jokesSeenService.getJokes(this.category);
    this.oldJokesAreLoading = false;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
