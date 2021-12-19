import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup = new FormGroup({});
  hide = true; 


  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required,Validators.email]),
        password : new FormControl('',[Validators.required])
      }
    );
  }

  getControl(formGroup: any, formControlIdentifier: any){
    return formGroup.get(formControlIdentifier);
  }

  getControlErrors(formControl: any): any{
    return Object.keys(formControl?.errors || {});
  }
 onLogin(){

  }
}
