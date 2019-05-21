import { Component, OnInit } from '@angular/core';
import {AdminAccountService} from '../admin-account.service';
import {Router} from '@angular/router';
import {FormControl,FormGroup,Validator} from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerUserData ={}
  constructor(private _adminAccountService:AdminAccountService,private _router:Router) { }
    // userModel = new User(" "," "," "," "," ",true);
  ngOnInit() {
  }
  adminregisterUser(){
    // console.log(this.registerUserData)
    this._adminAccountService.adminregisterUser(this.registerUserData)
    .subscribe(
      res => {
      console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/adlogin'])
      },
      err => console.log(err)
    )
  }
  register(data){
    alert("Your Successfully Register our website.");
  }

}
