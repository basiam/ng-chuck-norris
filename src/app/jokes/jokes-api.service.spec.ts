import { TestBed } from '@angular/core/testing';

import { JokesAPIService } from './jokes-api.service';

describe('JokesService', () => {
  let service: JokesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
