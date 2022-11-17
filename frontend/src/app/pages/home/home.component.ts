import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AweInterface } from 'src/app/interface/awe-interface';
import { AweServiceService } from 'src/app/service/awe-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent implements OnInit {
  

  constructor(private http:HttpClient,private aweservice:AweServiceService) { }

  //declaring variables 
  userDetails!: AweInterface[];
  localStorageData:any;
  value!:string
  user!:any;
  Posts:any;
  post=[];


 




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
   
  this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data)=>{
    console.log(data)
   
  })  
  }


  getPosts(){

    this.aweservice.getUserPosts(this.Posts).subscribe(res=>{

      this.Posts=res;
      this.post=this.Posts.data;
   
      console.log(res);
    
  })
}


}
