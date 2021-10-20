import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-history-jokes',
  template: '<div class="history"><app-jokes></app-jokes></div>',
  styleUrls: ['./history-jokes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryJokesComponent {
}
