import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepscardComponent } from './stepscard.component';

describe('StepscardComponent', () => {
  let component: StepscardComponent;
  let fixture: ComponentFixture<StepscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepscardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
