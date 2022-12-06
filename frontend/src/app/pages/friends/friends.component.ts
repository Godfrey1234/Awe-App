import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AweInterface } from 'src/app/interface/awe-interface';
import { friendsInterface } from 'src/app/interface/awe-interface';
import { countfriendsInterface } from 'src/app/interface/awe-interface';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {


  //declaring variables 
  userDetails!: AweInterface[];
  friend!: friendsInterface[];
  cFrineds !: countfriendsInterface [];
  localStorageData:any;
  value!:string
  user!:any;
  Posts:any;
  post=[];
  profilePicture!: string;
  numPosts!:string;
  like!:any;
  fullname!:string;
  surname!:string;
  email:any;

  id!:any
  constructor(private http:HttpClient) { 


  }

  ngOnInit(): void {
    this.getUserID()
    this.getFriends()
    this.countFriends()
    this.getDetails()
    
  }


  getDetails(){
   
    this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data:any)=>{
     
      this.profilePicture= data[0].profilepic
      this.surname = data[0].surname
      this.fullname = data[0].fullname
      this.email = data[0].email
      this.id = data[0].id



       //get number of the users posts
        console.log(this.email)
        this.http.get('http://localhost:3000/countPosts/'+this.email,)
      .subscribe((results:any)=>{

     console.log(results)
     this.numPosts = results[0].count;
     console.log(this.numPosts)
  }) 
  })  

    
  }  

  onFollow(id:any){

    console.log(id)


    this.http.put('http://localhost:3000/follow/'+id, {responseType:'text'})
    .subscribe((results)=>{
      
      console.log(results)

     
      
     

    })  

     
  




  }

  getUserID(){
    this.localStorageData = localStorage.getItem("token");
    this.value = JSON.parse(this.localStorageData)
    this.user = this.value
    this.userDetails = this.user;
    this.id = this.userDetails[0].id
  }

  getFriends(){
    
    console.log(this.id)
    this.http.get('http://localhost:3000/Friends/'+this.id).subscribe((data:any)=>{
      console.log(data)

       this.friend = data

    })
  }


  countFriends(){

  
    this.http.get('http://localhost:3000/CountFriends/'+this.id).subscribe((data:any)=>{
      console.log(data)

       this.cFrineds = data

    })


  }

}
