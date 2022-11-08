import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AweServiceService } from 'src/app/service/awe-service.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  token:any

  ngOnInit(): void {
  }

  onSubmit(data:any){
   
   //Add the User to the Database
   this.http.post('http://localhost:3000/login',data, {responseType:'text'})
   .subscribe((results)=>{

     

     if(results == 'success'){
      alert('succesfully loged in')
      console.warn(results)
      
      
      this.token = localStorage.setItem("token",results);
      
     }
     else{
      alert('invalid login details')
      console.warn(results)
     }
     
   })
  }

}
