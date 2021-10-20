import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-animal-jokes',
  template: '<div class="animal"><app-jokes></app-jokes></div>',
  styleUrls: ['./animal-jokes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnimalJokesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
