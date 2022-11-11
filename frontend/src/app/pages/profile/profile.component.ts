import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }


  tittle:any;
  data1:any;

  ngOnInit(): void {

    this.tittle = localStorage.getItem("token");
 
    // this.display = this.service
    console.log(this.tittle)
  }

}
