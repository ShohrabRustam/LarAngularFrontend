import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token : any;
  userData:any;
  email:any;
  constructor(private router:Router) { }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.token= localStorage.getItem('token');
    this.userData= jwt_decode(this.token);
    this.email=this.userData.email;
    console.log(this.token);

    console.log(this.userData.email);
  }

}
