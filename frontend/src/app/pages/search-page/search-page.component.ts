import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AweInterface } from 'src/app/interface/awe-interface';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {


  public isVisible: boolean = false;

  //declaring variables 
  userDetails!: AweInterface[];
  localStorageData:any;
  value!:string
  user!:any;
  Posts!:any;
  post=[];
  profilepic!:any;
  like!:any;
  user_fullname!:string;
  user_surname!:string;
  likee_id:any;
  email:any;
  id!:any
  response!:any;
  


//class to store frined details
  friend = {

    friend_id:"",
    user_id:"",
    friend_name:"",
    friend_surname :"",
    user_fullname :"",
    user_surname :""
   
  }


  constructor(private http:HttpClient,private router : Router) { }

  ngOnInit(): void {
    this.getDetails();
    this.getUserID();
  }



  searchText:any;

  ///getAllUsers

  getDetails(){
   
    this.http.get('http://localhost:3000/getAllUsers/').subscribe((data:any)=>{
     this.userDetails = data;
     console.log(data)
    })  
    }


    onClick(id:any){

      console.log(id)
      localStorage.setItem('user_id',id)
      this.router.navigate(['view_user']);

    }


    getUserID(){
      this.localStorageData = localStorage.getItem("token");
      this.value = JSON.parse(this.localStorageData)
      this.user = this.value
      this.userDetails = this.user;
      this.id = this.userDetails[0].id
      this.friend.user_fullname = this.userDetails[0].fullname
      this.friend.user_surname = this.userDetails[0].surname

      console.log(this.id)
    }

    onFollow(id:any,fullname:any,surname:any){
      
      console.log(id + ' '+ fullname + ' '+surname + ' ' +this.id)

      this.friend.friend_id = id;
      this.friend.friend_name = fullname;
      this.friend.friend_surname = surname;
      this.friend.user_id = this.id

      this.http.post('http://localhost:3000/Follow',this.friend, {responseType:'text'})
      .subscribe((results)=>{
   
        this.response =results
        this.isVisible=true;
        setTimeout(()=>this.isVisible=false,1000)

        console.log(results)
        
      })


      

    }


}
