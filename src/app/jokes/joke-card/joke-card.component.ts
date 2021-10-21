import { Component, Input } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {
  @Input() joke: Joke;

  @Input() cardIndex: number;


}
