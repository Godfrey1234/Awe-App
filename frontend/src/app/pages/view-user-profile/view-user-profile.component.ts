import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AweInterface } from 'src/app/interface/awe-interface';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.scss']
})
export class ViewUserProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  //declaring variables 
  userDetails!: AweInterface[];

  id!:any;
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
  


  ngOnInit(): void {
    this.getUserDetails(this.id)
    this.getPosts()
   
  }


  getUserDetails(id:any){

  

    id =  localStorage.getItem('user_id');
    console.log(id)
   
    this.http.get('http://localhost:3000/userDetails/'+id).subscribe((data:any)=>{
      
     
      this.profilePicture= data[0].profilepic
      this.surname = data[0].surname
      this.fullname = data[0].fullname
      this.email = data[0].email
      this.id = data[0].id
      console.log(data)


      console.log(this.email)
    
      this.http.get('http://localhost:3000/getposts_one/'+this.email)
      .subscribe((data:any)=>{
    
          console.log(data)

          this.userDetails = data
          
    
       }) 

   

    })  


    
  
  }



  getPosts(){

   


  }

  

}
