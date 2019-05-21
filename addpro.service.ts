import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AddproService {
  // private _addcartURL = "http://localhost:4000/api/addProduct"
  // private _getcartURL = "http://localhost:4000/api/getProduct"
  constructor(private http:HttpClient,private _router:Router) { }
  
  // getaddcart(card){
  //   return this.http.post<any>(this._addcartURL,card)
  // }
  baseurl: string = "http://localhost:4000/";
  addProduct(prod) {
    return this.http.post("http://localhost:4000/api/addProduct", prod);
  }
       
  getProduct() {
    return this.http.get("http://localhost:4000/api/getProduct");
  }

  getProductsByID(_id){

    return this.http.get("http://localhost:4000/api/getProdById/" +_id);
    }
  deleteProduct(id){
    return this.http.delete("http://localhost:4000/api/deleteProduct/"+id);
    }
    
    updateProduct(productId,productname,producturl,productprice,productdiscription,_id){

      const obj = {
        productId:productId,
      productname:productname,
      productprice:productprice,
      productdiscription:productdiscription,
      producturl:producturl
      }
      this.http.put("http://localhost:4000/api/updateProduct/"+_id,obj).subscribe(
      (res)=>{
      console.log('Done');
      console.log(res);
      console.log(obj);
      }
      )
      
      }
}
