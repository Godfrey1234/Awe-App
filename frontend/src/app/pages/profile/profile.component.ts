import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AweServiceService } from 'src/app/service/awe-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{
  
  
  Posts:any;
  post=[];

 constructor(private aweservice:AweServiceService){}



  ngOnInit(): void {

   this.aweservice.getUserPosts(this.Posts).subscribe(res=>{

   this.Posts=res;
   this.post=this.Posts.data;

   console.log(res);
   


    })
    
  }
  
}

