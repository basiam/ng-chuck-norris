import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JokeCardComponent } from './jokes/joke-card/joke-card.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AnimalJokesComponent } from './animal-jokes/animal-jokes.component';
import { FoodJokesComponent } from './food-jokes/food-jokes.component';
import { HistoryJokesComponent } from './history-jokes/history-jokes.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { PlacekittenPipe } from './shared/placekitten/placekitten.pipe';
import { PlaceimgPipe } from './shared/placeimg/placeimg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JokesComponent,
    JokeCardComponent,
    LoadingSpinnerComponent,
    ErrorPageComponent,
    AnimalJokesComponent,
    FoodJokesComponent,
    HistoryJokesComponent,
    ErrorMessageComponent,
    PlacekittenPipe,
    PlaceimgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
