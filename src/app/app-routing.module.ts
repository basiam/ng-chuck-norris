import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalJokesComponent } from './animal-jokes/animal-jokes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FoodJokesComponent } from './food-jokes/food-jokes.component';
import { HistoryJokesComponent } from './history-jokes/history-jokes.component';

import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'animal', component: AnimalJokesComponent },
  { path: 'history', component: HistoryJokesComponent },
  { path: 'food', component: FoodJokesComponent },
  { path: 'error', component: JokesComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
