import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GuardService } from './service/guard.service';
import { FriendsComponent } from './pages/friends/friends.component';
//import { Component, ViewChild } from '@angular/core';
//import { MdbTableDirective } from 'mdb-angular-ui-kit/table';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'home',component:HomeComponent,canActivate:[GuardService]},
  {path:"profile",component:ProfileComponent,canActivate:[GuardService]},
  {path:"search",component:SearchPageComponent,canActivate:[GuardService]},
  {path:"upload",component:UploadPageComponent,canActivate:[GuardService]},
  {path:"notifications",component:NotificationsComponent,canActivate:[GuardService]},
  {path:"editprofile",component:EditProfileComponent,canActivate:[GuardService]},
  {path:"friends",component:FriendsComponent,canActivate:[GuardService]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




export class AppComponent {
  
  constructor() {}


}
