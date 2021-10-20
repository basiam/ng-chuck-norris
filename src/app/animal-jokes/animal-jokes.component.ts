import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-jokes',
  template: '<app-jokes></app-jokes>',
  styleUrls: ['./animal-jokes.component.scss']
})
export class AnimalJokesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
