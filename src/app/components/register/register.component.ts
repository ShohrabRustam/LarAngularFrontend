import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

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
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required,Validators.minLength(6)],
      confirmPassword:['',Validators.required]
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
