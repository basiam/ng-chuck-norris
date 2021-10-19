import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit {
  @Input() joke: Joke;

  constructor() { }

  ngOnInit(): void {
  }

}
