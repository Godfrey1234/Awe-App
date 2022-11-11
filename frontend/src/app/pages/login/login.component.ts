import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AweServiceService } from 'src/app/service/awe-service.service';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tittle: any;

  constructor(private http:HttpClient, private router : Router) { 
   
    


  }

  

  ngOnInit(): void {
  } 

  onSubmit(data:any){
   
    console.log(data)
    this.tittle = JSON.stringify(data.email)
   //Add the User to the Database
   this.http.post('http://localhost:3000/login',data, {responseType:'text'})
   .subscribe((results)=>{

    
     if(results == 'sucess'){
      
     
      this.router.navigate(['home']);
      localStorage.setItem("token",this.tittle);
      console.warn('sucess');
      alert('successfully logged in');
      
     }
     else{
      alert('invalid login details')
      console.log('invalid')
      
     }
     
   })
  }

}
