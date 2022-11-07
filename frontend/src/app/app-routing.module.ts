import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'home',component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"search",component:SearchPageComponent},
  {path:"upload",component:UploadPageComponent},
  {path:"notification",component:NotificationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
