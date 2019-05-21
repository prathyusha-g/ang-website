import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable()
export class AuthService {

  private _registerURL = "http://localhost:4000/api/register"
  private _loginURL ="http://localhost:4000/api/login"

  constructor(private http : HttpClient,private _router:Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerURL,user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginURL,user)
  }
  logoutUser(){
    localStorage.removeItem('token')
    return this._router.navigate(['/home'])
  }
  
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }

}
