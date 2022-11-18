import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AweServiceService } from 'src/app/service/awe-service.service';
import { AweInterface } from 'src/app/interface/awe-interface';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{
  
  
    //declaring variables 
    userDetails!: AweInterface[];
    localStorageData:any;
    value!:string
    user!:any;
    Posts:any;
    post=[];
    profilePicture!: string;

 constructor(private aweservice:AweServiceService, private http:HttpClient){}



  ngOnInit(): void {

  this.getUserID();
  this.getDetails();
  

   this.aweservice.getUserPosts(this.Posts).subscribe(res=>{

   this.Posts=res;
   this.post=this.Posts.data;

   console.log(res);
   
   


    })
    
  }
  



  getUserID(){
    this.localStorageData = localStorage.getItem("token");
    this.value = JSON.parse(this.localStorageData)
    this.user = this.value
    this.userDetails = this.user;
  }



  getDetails(){
   
  this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data:any)=>{
   
    this.profilePicture= data[0].profilepic
   
  })  
  }
}

