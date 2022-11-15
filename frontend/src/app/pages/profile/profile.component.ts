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




// export class ProfileComponent implements OnInit {
// subscription =new Subscription();
// postview:any=[{}];
// url='http://localhost:3000/getUserPosts';

//   http: any;
//   constructor(private getview:AweServiceService) { }



  

//   ngOnInit(): void {


// this.getprofile(this.url);

//   }
//   getprofile(url: string) {
// this.subscription.add(
//   this.getview.getprofile(url).subscribe(res=>{this.postview=res['data'];},)


// );

//   }



  

// }
