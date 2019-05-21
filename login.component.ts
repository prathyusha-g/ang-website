import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl,FormGroup,Validator} from '@angular/forms';
import {Router} from '@angular/router';
// import {URLHelper} from '../URLHelper';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData ={ }
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {
  }
  // urls=URLHelper.urls;
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        // this._router.navigate(['/special'])
        this._router.navigate(['/add-cart'])
        },
      err => console.log(err)
    )
  }

  login(data){
    alert("Your Successfully login our website.");
  }
}

