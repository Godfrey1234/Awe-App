import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AweServiceService } from 'src/app/service/awe-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  



  constructor(private http:HttpClient, private router : Router) { }

  ngOnInit(): void {

  }

  onSubmit(data:any){
   
    console.log(data)
   //Add the User to the Database
   this.http.post('http://localhost:3000/register',data, {responseType:'text'})
   .subscribe((results)=>{

     

     if(results == 'successfully registered'){
     
      this.router.navigate(['login']);
      console.warn('sucess');
      alert('successfully registered');
      
     }
     else{
      alert(results)
      
     }
     
   })
  }


}
