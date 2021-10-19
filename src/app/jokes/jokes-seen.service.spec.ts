import { TestBed } from '@angular/core/testing';

import { JokesSeenService } from './jokes-seen.service';

describe('JokesSeenService', () => {
  let service: JokesSeenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesSeenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
