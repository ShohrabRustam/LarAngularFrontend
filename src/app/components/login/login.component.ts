import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private formBuilder:FormBuilder, private toastrService:ToastrService, private dataService:DataService ) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.invalid){
      return;
    }
    else{
    }
  }


}
