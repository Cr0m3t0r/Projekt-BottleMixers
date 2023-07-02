import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageDetailsComponent } from './beverage-details.component';

describe('BeverageDetailsComponent', () => {
  let component: BeverageDetailsComponent;
  let fixture: ComponentFixture<BeverageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeverageDetailsComponent]
    });
    fixture = TestBed.createComponent(BeverageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
