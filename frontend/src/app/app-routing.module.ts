import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD

import { ProfileComponent } from './pages/profile/profile.component';

=======
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
>>>>>>> c1f14faaa03d8868576b177bad3a96d53bf40d70
const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'home',component:HomeComponent},
<<<<<<< HEAD
{path:"profile",component:ProfileComponent}
=======
  {path:'search',component:SearchPageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'notifications',component:NotificationsComponent},
{path:"upload",component:UploadPageComponent}

>>>>>>> c1f14faaa03d8868576b177bad3a96d53bf40d70

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
