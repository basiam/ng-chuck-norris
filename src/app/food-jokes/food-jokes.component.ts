import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-food-jokes',
  template: '<div class="food"><app-jokes></app-jokes></div>',
  styleUrls: ['./food-jokes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoodJokesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
