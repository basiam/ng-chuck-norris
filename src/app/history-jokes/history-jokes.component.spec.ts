import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryJokesComponent } from './history-jokes.component';

describe('HistoryJokesComponent', () => {
  let component: HistoryJokesComponent;
  let fixture: ComponentFixture<HistoryJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
