import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MustMatch } from 'src/app/confirm.validator';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:any;
  data:any;
  submitted:boolean=false;
  constructor(private formBuilder:FormBuilder, private toastrService:ToastrService, private dataService:DataService) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
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
    this.dataService.registerUser(this.form.value).subscribe(
      res=>{
        this.data=res;
        // console.log(res);
        if(this.data.status===1){
          this.toastrService.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
            timeOut:2000,
            progressBar:true
          });
        }else{
          this.toastrService.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
            timeOut:2000,
            progressBar:true
          })

        }
        this.submitted=false;
        this.form.get('name').reset();
        this.form.get('email').reset();
        this.form.get('password').reset();
        this.form.get('confirmPassword').reset();
      }
    );
  }

}
