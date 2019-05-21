import { Component, OnInit } from '@angular/core';
import {AdminAccountService} from '../admin-account.service';
import {FormControl,FormGroup,Validator} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginUserData ={ }
  constructor(private _adminAcountService:AdminAccountService,private _router:Router) { }

  ngOnInit() {
  }
  // urls=URLHelper.urls;
  adminloginUser(){
    this._adminAcountService.adminloginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special'])
       
        },
      err => console.log(err)
    )
  }

  login(data){
    alert("Your Successfully login our website.");
  }

}
