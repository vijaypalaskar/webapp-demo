import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelEditProfileComponent } from './hotel-edit-profile.component';

describe('HotelEditProfileComponent', () => {
  let component: HotelEditProfileComponent;
  let fixture: ComponentFixture<HotelEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
