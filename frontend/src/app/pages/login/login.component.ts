import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AweServiceService } from 'src/app/service/awe-service.service';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';


import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tittle: any;
  spinnerService: any;
<<<<<<< HEAD
  public isVisible: boolean = false;
=======

  public isVisible: boolean = false;


   //declaring form group
   loginForm = new FormGroup({
      
    email :new FormControl(''),
    password :new FormControl('')
     
    
  });

  
>>>>>>> 17acf81900631b951407d63b79260c55d4c9b330
  constructor(private http:HttpClient, private router : Router,private authService:AuthService) { 
   
    


  }


  
  public showSpinner(): void {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000); // 5 seconds
  }
  ngOnInit(): void {
    
  } 

  onSubmit(){
   

  

   //Add the User to the Database
   this.http.post('http://localhost:3000/login',this.loginForm.value, {responseType:'text'})
   .subscribe((results)=>{


    this.isVisible=true;
    setTimeout(()=>this.isVisible=false,1000)
    
     if(results === 'invalid login details' || results === 'enter username and password'){
      
     
      console.log('invalid')
      
     }
     else{
      this.authService.login();
      console.warn('sucess');
   
      //routing to home page after successfully loging in
      this.router.navigate(['home']);
      //token for saving logged in user data
      localStorage.setItem("token",results);

     


     }
     
   })
  }


}
