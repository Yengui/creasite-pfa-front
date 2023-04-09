import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifsectionComponent } from './tarifsection.component';

describe('TarifsectionComponent', () => {
  let component: TarifsectionComponent;
  let fixture: ComponentFixture<TarifsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
