import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifcardComponent } from './tarifcard.component';

describe('TarifcardComponent', () => {
  let component: TarifcardComponent;
  let fixture: ComponentFixture<TarifcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
