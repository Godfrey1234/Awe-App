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
    surname!:string;
    fullname!:string;
    email!:string;
    numPosts!:string;
    id!:any;
  


 constructor(private aweservice:AweServiceService, private http:HttpClient){}


 public isVisible: boolean = false;
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
    this.surname = data[0].surname
    this.fullname = data[0].fullname
    this.email = data[0].email
    this.id = data[0].id

 //get user posts;
 this.http.get('http://localhost:3000/getposts_one/'+this.email)
 .subscribe((data:any)=>{

     console.log(data)

     this.userDetails = data
     

  }) 

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



 




  onClick(id:any){
    
    this.http.delete('http://localhost:3000/deletePosts/'+id, {responseType:'text'})
    .subscribe((results)=>{
      
      console.log(results)

      this.isVisible=true;
      setTimeout(()=>this.isVisible=false,1000)
      
     

    })  

     
  }
}

