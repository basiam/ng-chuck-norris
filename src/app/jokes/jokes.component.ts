import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Joke } from './joke.model';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit, OnDestroy {
  jokes: Joke[] = [];
  subscription: Subscription;
  constructor(private jokesService: JokesService, private router: Router) { }

  ngOnInit(): void {

    this.subscription = this.jokesService.jokesLoaded.subscribe(
      (jokes: Joke[]) => {
        this.jokes = jokes;
      }
    );
    this.jokesService.fetchJokes(this.router.url.split('/')[1]);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
