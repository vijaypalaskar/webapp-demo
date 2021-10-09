import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelEditOrderComponent } from './hotel-edit-order.component';

describe('HotelEditOrderComponent', () => {
  let component: HotelEditOrderComponent;
  let fixture: ComponentFixture<HotelEditOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelEditOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelEditOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
