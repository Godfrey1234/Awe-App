import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  

  onClick(){
    console.log('we are logging out')
    localStorage.removeItem("token");
    this.router.navigate(['/index']);
  }
}
