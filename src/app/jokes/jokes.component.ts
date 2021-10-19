import { Component, OnInit } from '@angular/core';

import { Joke } from './joke.model';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  jokes: Joke[] = [];
  constructor(private jokeService: JokesService) { }

  ngOnInit(): void {
    this.jokes = this.jokeService.getJokes()
  }

}
