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

  //declaring variables 
  userDetails!: AweInterface[];
  
  constructor(private http:HttpClient,private router : Router) { }

  ngOnInit(): void {
    this.getDetails();
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

    onFollow(id:any){
      console.log(id)
      

    }


}
