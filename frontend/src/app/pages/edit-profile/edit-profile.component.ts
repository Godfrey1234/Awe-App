import { Component, OnInit } from '@angular/core';
import { AweInterface } from 'src/app/interface/awe-interface';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { AweServiceService } from 'src/app/service/awe-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})




export class EditProfileComponent implements OnInit {
  public isVisible: boolean = false;
  constructor(private http:HttpClient) { }
  
  //declaring form group
  post = new FormGroup({
      
    caption: new FormControl(''),
    email :new FormControl(''),
    file :new FormControl(''),
    image :new FormControl(''),
    profilepic:new FormControl(''),
    id :new FormControl(),
    
    
});

file:any
  
  //declaring variables 
  userDetails!: AweInterface[];
  email:any;
  value!:string
  user!:any;
  profilepicR:string ='';
  

  

 

  ngOnInit(): void {

  
    this.getUserID();
    this.getDetails();
   
    


  }

  getUserID(){


    this.email = localStorage.getItem("token");
    this.value = JSON.parse(this.email)

    //console.log(this.value)
    this.user = this.value
    this.userDetails = this.user;
   



  }



  getDetails(){
   
  this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data:any)=>{
    console.log(data)
    this.profilepicR= data[0].profilepic
   
  })  
  
   
     
   

  }


    //targetting the selected image
    onFileChange(event:any) {

      if (event.target.files.length > 0) {
        this.file = event.target.files[0];
        
      }
  }

  onSubmit(data:any){

    console.log(data)

    this.http.put('http://localhost:3000/updatePassword/'+this.userDetails[0].id,data, {responseType:'text'})
    .subscribe((data)=>{
      console.log(data)
   })

  }

//function for changing profile picture
  onClick(){

    
   const formData = new FormData();
   formData.append("file",this.file)
   formData.append("upload_preset","chsurqx3")

   this.http.post('https://api.cloudinary.com/v1_1/dp94yvsaw/image/upload',formData, )
   .subscribe((res:any)=>{
       

   if(res.url){
    
    this.profilepicR = res.url
    this.post.value.profilepic  = res.url
    this.post.value.id = this.userDetails[0].id
    this.post.value.email = this.userDetails[0].email
    console.log(this.post.value)
    
    this.http.put('http://localhost:3000/updateProfilePic/',this.post.value,{responseType:'text'} )
    .subscribe((res:any)=>{

     
      
      if(res){
        this.getDetails()
        this.isVisible=true;
        setTimeout(()=>this.isVisible=false,1000)
        
      }
      
    
 
    }) // end of sending data to backend
   }
 

   })// end of sending image to cloudinaary

  }



}
