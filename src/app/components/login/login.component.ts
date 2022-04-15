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
  data:any;
  submitted:boolean=false;
  tokken:any;

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
      this.dataService.loginUser(this.form.value).subscribe(
        res=>{
          this.data=res;
          if(this.data.status===1){

          }
        }
      )
    }
  }


}
