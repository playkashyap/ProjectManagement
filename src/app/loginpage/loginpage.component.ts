import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/pmsLogin/login.service';
import { Users } from '../models/sys-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.loginService.removeAuth(); 

  }

  loginError?: string = '';

  formLogin = new FormGroup({
    ApiUser: new FormControl("", [Validators.required]),
    ApiPass: new FormControl("", [Validators.required])
  })


  getIUser(): FormControl {
    return this.formLogin.get("ApiUser") as FormControl;
  }

  getIPass(): FormControl {
    return this.formLogin.get("ApiPass") as FormControl;
  }

  onSubmit(){

    let uModel: Users = {
      ApiUser: this.formLogin.value.ApiUser ?? "",
      ApiPass: this.formLogin.value.ApiPass ?? ""
    }
    console.log(uModel);
    this.loginService.validateCreds(uModel).subscribe(response => {
      console.log(response);
      if(response.ReturnMsg == 'Success'){
        this.loginService.setToken(response.UserModel.Password);
        this.router.navigate(['']);
        console.log("login success", response);
      }
      else{
        this.loginError = response.ReturnMsg;
      }
    },
    (error: HttpErrorResponse) => {
      if(error.status == 0){
        this.loginError = 'Unable to connect to server. Please try again later.';
      }
    }
    )
  }

}
