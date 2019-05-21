import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable()
export class AdminAccountService {
  private _adminregisterURL = "http://localhost:4000/api/adregister"
  private _adminloginURL ="http://localhost:4000/api/adlogin"

  constructor(private http : HttpClient,private _router:Router) { }
  adminregisterUser(admin){
    return this.http.post<any>(this._adminregisterURL,admin)
  }

  adminloginUser(admin){
    return this.http.post<any>(this._adminloginURL,admin)
  }
  adminlogoutUser(){
    localStorage.removeItem('token')
    return this._router.navigate(['/home'])
  }
  
  adminloggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }

}
