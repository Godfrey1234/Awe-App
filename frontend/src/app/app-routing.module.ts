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
//import { Component, ViewChild } from '@angular/core';
//import { MdbTableDirective } from 'mdb-angular-ui-kit/table';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'home',component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"search",component:SearchPageComponent},
  {path:"upload",component:UploadPageComponent},
  {path:"notifications",component:NotificationsComponent},
  {path:"editprofile",component:EditProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// export interface Person {
//   name: string;
//   position: string;
//   office: string;
//   age: number;
//   startDate: string;
//   salary: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
// })
export class AppComponent {
  // @ViewChild('table') table!: MdbTableDirective<Person>;

  constructor() {}

  headers = ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Salary'];

  // dataSource: Person[] = [
  //   {
  //     name: 'Tiger Nixon',
  //     position: 'System Architect',
  //     office: 'Edinburgh',
  //     age: 61,
  //     startDate: '2011/04/25',
  //     salary: '$320,800',
  //   },
  //   {
  //     name: 'Sonya Frost',
  //     position: 'Software Engineer',
  //     office: 'Edinburgh',
  //     age: 23,
  //     startDate: '2008/12/13',
  //     salary: '$103,600',
  //   },
  //   {
  //     name: 'Jena Gaines',
  //     position: 'Office Manager',
  //     office: 'London',
  //     age: 30,
  //     startDate: '2008/12/19',
  //     salary: '$90,560',
  //   },
  //   {
  //     name: 'Quinn Flynn',
  //     position: 'Support Lead',
  //     office: 'Edinburgh',
  //     age: 22,
  //     startDate: '2013/03/03',
  //     salary: '$342,000',
  //   },
  //   {
  //     name: 'Charde Marshall',
  //     position: 'Regional Director',
  //     office: 'San Francisco',
  //     age: 36,
  //     startDate: '2008/10/16',
  //     salary: '$470,600',
  //   },
  //   {
  //     name: 'Haley Kennedy',
  //     position: 'Senior Marketing Designer',
  //     office: 'London',
  //     age: 43,
  //     startDate: '2012/12/18',
  //     salary: '$313,500',
  //   },
  //   {
  //     name: 'Tatyana Fitzpatrick',
  //     position: 'Regional Director',
  //     office: 'London',
  //     age: 19,
  //     startDate: '2010/03/17',
  //     salary: '$385,750',
  //   },
  //   {
  //     name: 'Michael Silva',
  //     position: 'Marketing Designer',
  //     office: 'London',
  //     age: 66,
  //     startDate: '2012/11/27',
  //     salary: '$198,500',
  //   },
  //   {
  //     name: 'Paul Byrd',
  //     position: 'Chief Financial Officer (CFO)',
  //     office: 'New York',
  //     age: 64,
  //     startDate: '2010/06/09',
  //     salary: '$725,000',
  //   },
  //   {
  //     name: 'Gloria Little',
  //     position: 'Systems Administrator',
  //     office: 'New York',
  //     age: 59,
  //     startDate: '2009/04/10',
  //     salary: '$237,500',
  //   },
  //   {
  //     name: 'Garrett Winters',
  //     position: 'Accountant',
  //     office: 'Tokyo',
  //     age: 63,
  //     startDate: '2011/07/25',
  //     salary: '$170,750',
  //   },
  //   {
  //     name: 'Ashton Cox',
  //     position: 'Junior Technical Author',
  //     office: 'San Francisco',
  //     age: 66,
  //     startDate: '2009/01/12',
  //     salary: '$86,000',
  //   },
  //   {
  //     name: 'Cedric Kelly',
  //     position: 'Senior Javascript Developer',
  //     office: 'Edinburgh',
  //     age: 22,
  //     startDate: '2012/03/29',
  //     salary: '$433,060',
  //   },
  //   {
  //     name: 'Airi Satou',
  //     position: 'Accountant',
  //     office: 'Tokyo',
  //     age: 33,
  //     startDate: '2008/11/28',
  //     salary: '$162,700',
  //   },
  //   {
  //     name: 'Brielle Williamson',
  //     position: 'Integration Specialist',
  //     office: 'New York',
  //     age: 61,
  //     startDate: '2012/12/02',
  //     salary: '$372,000',
  //   },
  // ];

  // search(event: Event): void {
  //   const searchTerm = (event.target as HTMLInputElement).value;
  //   this.table.search(searchTerm);
  // }
}
