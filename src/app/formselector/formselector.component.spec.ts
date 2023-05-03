import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormselectorComponent } from './formselector.component';

describe('FormselectorComponent', () => {
  let component: FormselectorComponent;
  let fixture: ComponentFixture<FormselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
