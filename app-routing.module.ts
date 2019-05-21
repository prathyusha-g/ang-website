import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RatingCardComponent} from './rating-card/rating-card.component';
import {MeetUsComponent} from './meet-us/meet-us.component';
import {AddProDataComponent}from './add-pro-data/add-pro-data.component';
import { AuthGuard } from './auth.guard';
import {UpdateProductComponent} from './update-product/update-product.component';
import {GetdiscComponent} from './getdisc/getdisc.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
const routes: Routes = [
  
  {path:'', pathMatch:"full", redirectTo:"home"},
  {
    path : "home",
    component: HomeComponent,
    
  },
  {
    path: "special",
    component:UserProductsComponent,
     canActivate : [AuthGuard]
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"Rating",
    component:RatingCardComponent,
    canActivate : [AuthGuard]
  },
  {
   path:"meet-us",
   component:MeetUsComponent,
   canActivate : [AuthGuard]
  },
  {
    path:"add-cart",
    component:AddProDataComponent
  },
  {
    path: "update-prod/:id",
    component:UpdateProductComponent
  },
  {
    path:"getdisc/:_id",
    component:GetdiscComponent
  },
  {
    path:"adregister",
    component:UserRegisterComponent
  },
  {
    path:"adlogin",
    component:AdminloginComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
