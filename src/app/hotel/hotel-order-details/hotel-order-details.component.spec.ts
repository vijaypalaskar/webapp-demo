import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOrderDetailsComponent } from './hotel-order-details.component';

describe('HotelOrderDetailsComponent', () => {
  let component: HotelOrderDetailsComponent;
  let fixture: ComponentFixture<HotelOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
