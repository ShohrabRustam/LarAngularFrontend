import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MustMatch } from 'src/app/confirm.validator';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:any;
  submitted:boolean=false;
  constructor(private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.creteForm();
  }

  creteForm(){
    this.form=this.formBuilder.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(6)]],
      confirmPassword:[null,[Validators.required]]
    },{
        validator: MustMatch('password','confirmPassword')
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
  }

}
