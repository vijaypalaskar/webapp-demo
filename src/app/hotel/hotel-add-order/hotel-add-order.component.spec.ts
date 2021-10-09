import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAddOrderComponent } from './hotel-add-order.component';

describe('HotelAddOrderComponent', () => {
  let component: HotelAddOrderComponent;
  let fixture: ComponentFixture<HotelAddOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAddOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
