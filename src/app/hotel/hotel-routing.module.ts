import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDashboardComponent } from './hotel-dashboard/hotel-dashboard.component';
import { HotelEditProfileComponent } from './hotel-edit-profile/hotel-edit-profile.component';
import { HotelLoginComponent } from './hotel-login/hotel-login.component';
import { HotelProfileComponent } from './hotel-profile/hotel-profile.component';
import { HotelComponent } from './hotel.component';

const routes: Routes = [
  { path: '', component: HotelComponent,
  children: [
    {path: '', redirectTo: '/hotel/dashboard', pathMatch: 'full'},
    {path: 'login', component: HotelLoginComponent},
    {path: 'dashboard', component: HotelDashboardComponent}
    ]
  },
  { path: 'login', component: HotelLoginComponent },
  { path: 'dashboard', component: HotelDashboardComponent },
  { path: 'profile', component: HotelProfileComponent },
  { path: 'edit-profile', component: HotelEditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
