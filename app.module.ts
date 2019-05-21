import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { FooterComponent } from './footer/footer.component';
import { BghomeComponent } from './bghome/bghome.component';
// import { AdminCardsComponent } from './admin-cards/admin-cards.component';
import { RatingCardComponent } from './rating-card/rating-card.component';
import { MeetUsComponent } from './meet-us/meet-us.component';
import {AuthGuard} from './auth.guard';
import { AuthService } from './auth.service';
import {EventService} from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AppPasswordDirective } from './app-password.directive';
import { AddProDataComponent } from './add-pro-data/add-pro-data.component';
import { FootpageComponent } from './footpage/footpage.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductBgComponent } from './product-bg/product-bg.component';
import { GetdiscComponent } from './getdisc/getdisc.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminAccountService } from './admin-account.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { GetproComponent } from './getpro/getpro.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    UserProductsComponent,
    FooterComponent,
    BghomeComponent,
    // AdminCardsComponent,
    RatingCardComponent,
    MeetUsComponent,
    AppPasswordDirective,
    AddProDataComponent,
    FootpageComponent,
    UpdateProductComponent,
    ProductBgComponent,
    GetdiscComponent,
    UserRegisterComponent,
    AdminloginComponent,
    // EmployeeComponent,
    // GetproComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AdminAccountService,AuthService,EventService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
