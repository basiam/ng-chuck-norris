import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalJokesComponent } from './animal-jokes.component';

describe('AnimalJokesComponent', () => {
  let component: AnimalJokesComponent;
  let fixture: ComponentFixture<AnimalJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
