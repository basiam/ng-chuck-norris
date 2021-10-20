import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-jokes',
  template: '<app-jokes></app-jokes>',
  styleUrls: ['./food-jokes.component.scss']
})
export class FoodJokesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
