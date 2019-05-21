import { Component, OnInit } from '@angular/core';
 import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormControl,FormGroup,Validator} from '@angular/forms';
// import { User } from '../user';

 @Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData ={}
  constructor(private _auth:AuthService,private _router:Router) { }
    // userModel = new User(" "," "," "," "," ",true);
  ngOnInit() {
  }
  registerUser(){
    // console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
      console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/login'])
      },
      err => console.log(err)
    )
  }
  register(data){
    alert("Your Successfully Register our website.");
  }
}
