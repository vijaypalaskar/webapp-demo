import { NgModule } from '@angular/core';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { HotelLoginComponent } from './hotel-login/hotel-login.component';
import { HotelLayoutComponent } from './hotel-layout/hotel-layout.component';
import { HotelDashboardComponent } from './hotel-dashboard/hotel-dashboard.component';
import { HotelHeaderComponent } from './hotel-header/hotel-header.component';
import { HotelFooterComponent } from './hotel-footer/hotel-footer.component';
import { HotelProfileComponent } from './hotel-profile/hotel-profile.component';
import { HotelEditProfileComponent } from './hotel-edit-profile/hotel-edit-profile.component';
import { HotelOrderListComponent } from './hotel-order-list/hotel-order-list.component';
import { HotelOrderDetailsComponent } from './hotel-order-details/hotel-order-details.component';
import { HotelAddOrderComponent } from './hotel-add-order/hotel-add-order.component';
import { HotelEditOrderComponent } from './hotel-edit-order/hotel-edit-order.component';
import { SharedModule } from '../shared/shared.module';
import { HotelService } from '../services/hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HotelComponent,
    HotelLoginComponent,
    HotelLayoutComponent,
    HotelDashboardComponent,
    HotelHeaderComponent,
    HotelFooterComponent,
    HotelProfileComponent,
    HotelEditProfileComponent,
    HotelOrderListComponent,
    HotelOrderDetailsComponent,
    HotelAddOrderComponent,
    HotelEditOrderComponent
  ],
  entryComponents: [
    HotelAddOrderComponent
  ],
  imports: [
    SharedModule,
    HotelRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HotelService
  ]
})
export class HotelModule { }
