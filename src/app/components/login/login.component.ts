import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any;

  submitted:boolean=false;

  get f(){
    return this.form.controls;
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){}

}
