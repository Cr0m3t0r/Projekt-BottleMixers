import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageOverviewComponent } from './beverage-overview.component';

describe('BeverageOverviewComponent', () => {
  let component: BeverageOverviewComponent;
  let fixture: ComponentFixture<BeverageOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeverageOverviewComponent]
    });
    fixture = TestBed.createComponent(BeverageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
