import { Injectable } from '@angular/core';
import { AweInterface } from '../interface/awe-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AweServiceService {
  userPosts(Posts: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

 
  url = "http://localhost:3000/getUserPosts"
  

  getUserPosts(data: any){
    return this.http.get(this.url, data);
  }



}
