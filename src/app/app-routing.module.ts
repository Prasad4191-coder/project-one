import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTimesheetsComponent } from './all-timesheets/all-timesheets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyTimesheetsComponent } from './my-timesheets/my-timesheets.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path : '' , redirectTo : '/dashboard' , pathMatch : 'full'},
  { path : 'dashboard', component : DashboardComponent },
  { path : 'alltimesheet', component : AllTimesheetsComponent },
  { path : 'mytimesheet', component : MyTimesheetsComponent },
  { path : 'project', component : MyProjectsComponent },
  { path : 'profile', component : ProfileComponent },
  { path : 'settings', component : SettingsComponent },
  { path : 'form', component : FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
