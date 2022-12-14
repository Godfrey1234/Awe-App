import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
// import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { LogoComponent } from './components/logo/logo.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ViewUserProfileComponent } from './pages/view-user-profile/view-user-profile.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { GuardService } from './service/guard.service';
import { AuthService } from './service/auth.service';
import { FriendsComponent } from './pages/friends/friends.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    SearchPageComponent,
    NotificationsComponent,
    ProfileComponent,
    UploadPageComponent,
    NavbarComponent,
    EditProfileComponent,
    LogoComponent,
    ViewUserProfileComponent,
    FriendsComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    AppRoutingModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    CommonModule,
 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path:'home',component:HomeComponent},
      {path:'view_user',component:ViewUserProfileComponent}
    ]),
  ],
  providers: [GuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
