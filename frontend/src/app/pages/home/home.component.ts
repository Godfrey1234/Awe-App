import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AweInterface } from 'src/app/interface/awe-interface';
import { AweServiceService } from 'src/app/service/awe-service.service';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent implements OnInit {
  
  public isVisible: boolean = false;
  public unlike: boolean = false;
  isLiked: boolean = false;
  isLoggedIn!:Boolean;
 

  constructor(private http:HttpClient,private aweservice:AweServiceService, private router : Router) { }


  
  



  //declaring variables 
  userDetails!: AweInterface[];
  localStorageData:any;
  value!:string
  user!:any;
  Posts!:any;
  post=[];
  profilepic!:any;
  like!:any;
  fullname!:string;
  surname!:string;
  likee_id:any;
  email:any;


  notification = {

    fullname:"",
    surname:"",
    email:"",
    email_post_owner :"",
    id:0

  }


  likee = {

    likee_id:0

  }
 




  ngOnInit(): void {

    
    this.getUserID();
    this.getDetails();
    this.getPosts();

    
  }


  getUserID(){
    this.localStorageData = localStorage.getItem("token");
    this.value = JSON.parse(this.localStorageData)
    this.user = this.value
    this.userDetails = this.user;
  }



  getDetails(){
   
  this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data:any)=>{
    this.fullname= data[0].fullname
    this.surname = data[0].surname
    this.email = data[0].email

    this.notification.fullname = data[0].fullname
    this.notification.surname = data[0].surname
    this.notification.email = data[0].email
    this.notification.id = data[0].id
    this.likee.likee_id = data[0].id

     
    })  
  }


  getPosts(){

    this.aweservice.getUserPosts(this.Posts).subscribe((res:any)=>{

      this.Posts=res;
      //this.post=res;
      console.log(res);

      if(res){
        this.notification.email_post_owner = res[0].email  //bug here if no posts it cannot get email
      }
    
  })


 

 
}


onUnlike(id:any,unliked:string){
  this.isLiked = false;

  this.http.put('http://localhost:3000/unlike/'+id, {Response})
  .subscribe((data)=>{

    this.getPosts();
    this.like = true;
  
  
    
 })
  
  

}

getLikes(){

 

}


onLike(id:any,liked:string){
  this.isLiked = true;
 
 

this.http.put('http://localhost:3000/like/'+id,this.likee, {responseType:'text'})
.subscribe((data)=>{


    this.getPosts();
    this.like = true;
  
    if(data){// if liked insert into notifications
     
      this.http.post('http://localhost:3000/notification/'+id,this.notification, {responseType:'text'})
      .subscribe((results)=>{

         if(results){
          
         } 


      })

    
   
  }




   
    
 })




}


}
