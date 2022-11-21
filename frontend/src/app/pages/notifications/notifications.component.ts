import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AweInterface } from 'src/app/interface/awe-interface';
import { notificationInterface } from 'src/app/interface/awe-interface';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  //declaring variables 
  userDetails!: AweInterface[];
  localStorageData:any;
  value!:string
  user!:any;
  Posts:any;
  post=[];
  profilepic!:any;
  like!:any;
  fullname!:string;
  surname!:string;
  email:any;
  message!: notificationInterface[];


  ngOnInit(): void {
  
    
    this.getNotification();
  }



  getNotification(){
    this.localStorageData = localStorage.getItem("token");
    this.value = JSON.parse(this.localStorageData)
    this.user = this.value
    this.userDetails = this.user;
    //console.log(this.userDetails)

    this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data:any)=>{
  
      this.email = data[0].email
      console.log(this.email)

       if(data){
        this.http.get('http://localhost:3000/notification/'+this.email).subscribe((data:any)=>{
          console.log(data)

            this.message = data

        })

       }


      })
  
    }

 
}
