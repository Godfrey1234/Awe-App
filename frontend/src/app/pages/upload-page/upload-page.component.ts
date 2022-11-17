import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/service/upload-image.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AweInterface } from 'src/app/interface/awe-interface';


@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {


  post = new FormGroup({
      
      caption: new FormControl(''),
      email :new FormControl(''),
      file :new FormControl(''),
      image :new FormControl(''),
      fullname :new FormControl(''),
      surname :new FormControl(''),
      profilepic: new FormControl(''),

      
      
  });
//declaring variables 
   userDetails!: AweInterface[];
   email:any;
   value!:string
   user!:any;
   file: any;

  constructor(private http:HttpClient) { }

 


  ngOnInit(): void {
    
    this.getDetails()//getting logged in user details
  }


  //getting loged in user details

  getDetails(){
    
    this.email = localStorage.getItem("token");
    this.value = JSON.parse(this.email)
    this.user = this.value
    this.userDetails = this.user; 
    this.http.get('http://localhost:3000/userDetails/'+this.userDetails[0].id).subscribe((data)=>{
   
  })  
}


  //targetting the selected image
  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      
    }
}

  onSubmit(){

   const formData = new FormData();
   formData.append("file",this.file)
   formData.append("upload_preset","chsurqx3")

   this.http.post('https://api.cloudinary.com/v1_1/dp94yvsaw/image/upload',formData, )
   .subscribe((res:any)=>{
       

   if(res.url){
    
    this.post.value.image  = res.url
    this.post.value.email = this.userDetails[0].email
    this.post.value.fullname = this.userDetails[0].fullname
    

    console.log(this.post.value)
    this.http.post('http://localhost:3000/image',this.post.value,{responseType:'text'} )
    .subscribe((res:any)=>{

      alert('post sucessfully sent')
   

 
    })
   }
 
    





   })







   }
   

  }


