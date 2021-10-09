import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOrderListComponent } from './hotel-order-list.component';

describe('HotelOrderListComponent', () => {
  let component: HotelOrderListComponent;
  let fixture: ComponentFixture<HotelOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
