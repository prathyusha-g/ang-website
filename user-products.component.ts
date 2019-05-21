import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AddproService} from '../addpro.service';
@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
  // specialEvents = [ ]
  products;
  constructor(private _addproService: AddproService, private _router : Router) { }
  

  getProductsByID(_id) {
    console.log("_id",_id);
    this._addproService.getProductsByID(_id).subscribe(
      (response) =>{
        console.log("Get Your Product Details");
        console.log("response",response);
        // localStorage.setItem('token',response.token)
        // this._router.navigate(['/getdisc',{data:response}])
        this._router.navigate(['/getdisc/'+ _id])
      },
      err => console.log(err)
    )
  
  }

  ngOnInit() {
    this._addproService.getProduct().subscribe(
      (response)=>{
        this.products=response;
      }
    )
    
}


buypro(){
  alert("Product booked shortly will reach to you.Thank you!");
}



}
