import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AweServiceService } from 'src/app/service/awe-service.service';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tittle: any;

  public isVisible: boolean = false;


   //declaring form group
   loginForm = new FormGroup({
      
    email :new FormControl(''),
    password :new FormControl('')
     
    
  });

  constructor(private http:HttpClient, private router : Router) { 
   
    


  }


  

  ngOnInit(): void {
  } 

  onSubmit(){
   
   //Add the User to the Database
   this.http.post('http://localhost:3000/login',this.loginForm.value, {responseType:'text'})
   .subscribe((results)=>{

    
     if(results === 'invalid login details' || results === 'enter username and password'){
      
      alert('invalid login details')
      console.log('invalid')
      
     }
     else{
     
      console.warn('sucess');
      alert('successfully logged in');
      //routing to home page after successfully loging in
      this.router.navigate(['home']);
      //token for saving logged in user data
      localStorage.setItem("token",results);

     


     }
     
   })
  }

}
