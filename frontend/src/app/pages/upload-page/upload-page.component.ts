import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/service/upload-image.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {


  post = new FormGroup({
      
      caption: new FormControl(''),
      email :new FormControl(''),
      image :new FormControl(''),
      
      
  });
  file: any;

  constructor(private http:HttpClient) { }

 

  ngOnInit(): void {
    
  }

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
       
   
    this.post.value.image = res.url;
    //insert posts
    this.http.post('http://localhost:3000/image',this.post, )
    .subscribe((res:any)=>{

      
      console.log('successuly uploaded image')



    })





   })







   }
   

  }


