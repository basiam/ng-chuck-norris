import { Injectable } from '@angular/core';
import { Joke } from './joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  jokes: Joke[] = [
    new Joke(
      [],
      "2020 - 01 - 05 13: 42: 22.980058",
      "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "O0Dp9XImQAeCjXsvLT0_NQ",
      "2020-01-05 13:42:22.980058",
      "https://api.chucknorris.io/jokes/O0Dp9XImQAeCjXsvLT0_NQ",
      "Most people turn to stone when they gaze in Madusa's eyes for a split second. Chuck Norris looked that bitch in the face for five minutes and got her pregnant."
    ),
    new Joke(
      [],
      "2020-01-05 13:42:23.484083",
      "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "PbE7cRZ5RXGCeGB1VuUdjA",
      "2020-01-05 13:42:23.484083",
      "https://api.chucknorris.io/jokes/PbE7cRZ5RXGCeGB1VuUdjA",
      "Chuck Norris once kicked Doyle Brunson's ace."
    )
  ]
  constructor() { }


  getJokes() {
    return this.jokes.slice();
  }
}
