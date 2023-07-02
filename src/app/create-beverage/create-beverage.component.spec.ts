import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBeverageComponent } from './create-beverage.component';

describe('CreateBeverageComponent', () => {
  let component: CreateBeverageComponent;
  let fixture: ComponentFixture<CreateBeverageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBeverageComponent]
    });
    fixture = TestBed.createComponent(CreateBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
