import { Component, OnInit } from '@angular/core';
import { AweInterface } from 'src/app/interface/awe-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})




export class EditProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  
  //declaring variables 
  userDetails!: AweInterface[];
  email:any;
  value!:string
  user!:any;

  

 

  ngOnInit(): void {

  
    this.getUserID();
    this.getDetails();


  }

  getUserID(){


    this.email = localStorage.getItem("token");
    this.value = JSON.parse(this.email)
    this.user = this.value
    this.userDetails = this.user;
   



  }



  getDetails(){
   
  this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data)=>{
   
  })  
  
   
     
   

  }

  onSubmit(data:any){
    
  }
}
