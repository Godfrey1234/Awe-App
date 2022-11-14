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

  

  userDetails!: AweInterface[];
 
  
  email:any;
  value!:string
  user!:any;

  

 

  ngOnInit(): void {
    this.email = localStorage.getItem("token");
    this.value = JSON.parse(this.email)
    this.user = this.value
    console.log(this.user)
    this.getDetails();




  }


  getDetails(){



  }

  onSubmit(data:any){
    
  }
}
