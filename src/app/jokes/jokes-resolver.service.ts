import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { JokeObject } from './joke.model';
import { JokesAPIService } from './jokes-api.service';

@Injectable({ providedIn: 'root' })
export class JokesResolverService implements Resolve<JokeObject[]> {
  constructor(
    private jokesAPIService: JokesAPIService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const category = route.url[0].path;
    return this.jokesAPIService.fetchJokes(category);
  }
}