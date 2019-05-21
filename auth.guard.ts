import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {AuthService} from './auth.service';
import {AdminAccountService} from './admin-account.service';
@Injectable()
export class AuthGuard implements  CanActivate{
 constructor(private _authService : AuthService,private _router:Router,private _adminAccountSerrvice : AdminAccountService){ }
 
 canActivate():boolean{
   if(this._authService.loggedIn()){
     return true
   }
   else{
     this._router.navigate(['/login'])
     return false
   };
   if(this._adminAccountSerrvice.adminloggedIn()){
    return true
   }
   else{
     this._router.navigate(['/adlogin'])
     return false
   }
 }
}
