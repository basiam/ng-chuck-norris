import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodJokesComponent } from './food-jokes.component';

describe('FoodJokesComponent', () => {
  let component: FoodJokesComponent;
  let fixture: ComponentFixture<FoodJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
