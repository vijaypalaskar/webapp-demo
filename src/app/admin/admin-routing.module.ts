import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEditProfileComponent } from './admin-edit-profile/admin-edit-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',component: AdminComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'profile', component: AdminProfileComponent },
  { path: 'edit-profile', component: AdminEditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
