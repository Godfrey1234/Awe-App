import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AweServiceService } from 'src/app/service/awe-service.service';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tittle: any;
  data1: any;

  constructor(private http:HttpClient, private router : Router) { 
   

    let JSONDatas = [
      {"email": "Open"},
      
    
  ]
  
  localStorage.setItem("datas", JSON.stringify(JSONDatas));
  
  //this.data1 = JSON.parse(localStorage.getItem("datas"));

  localStorage.getItem("datas")
  
  console.log(this.data1);


  }

  

  ngOnInit(): void {
  } 

  onSubmit(data:any){
   
    console.log(data)
    this.tittle = JSON.stringify(data)
   //Add the User to the Database
   this.http.post('http://localhost:3000/login',data, {responseType:'text'})
   .subscribe((results)=>{

     

     if(results == results){
      
     
      this.router.navigate(['home']);
      //localStorage.setItem("token",this.tittle);
      console.warn('sucess');
      alert('successfully registered');
      
     }
     else{
      alert('invalid login details')
      console.log('invalid')
      
     }
     
   })
  }

}
