import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsectionComponent } from './stepsection.component';

describe('StepsectionComponent', () => {
  let component: StepsectionComponent;
  let fixture: ComponentFixture<StepsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
