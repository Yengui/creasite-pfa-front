import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerpageComponent } from './creerpage.component';

describe('CreerpageComponent', () => {
  let component: CreerpageComponent;
  let fixture: ComponentFixture<CreerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
