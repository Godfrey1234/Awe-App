import { Injectable } from '@angular/core';
import { AweInterface } from '../interface/awe-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AweServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000/register"
  baseUrlL = "http://localhost:3000/login"

  create(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  login(data: any){
    return this.http.post(this.baseUrlL, data);
  }
}
