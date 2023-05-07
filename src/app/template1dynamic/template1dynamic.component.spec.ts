import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template1dynamicComponent } from './template1dynamic.component';

describe('Template1dynamicComponent', () => {
  let component: Template1dynamicComponent;
  let fixture: ComponentFixture<Template1dynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Template1dynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Template1dynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
