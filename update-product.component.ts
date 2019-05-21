import { Component, OnInit } from '@angular/core';
import {AddproService} from '../addpro.service';
import {Router,ActivatedRoute} from '@angular/router';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  addProd: FormGroup;
  submitted = false;
  resp;
  products;
  constructor(private _addproService: AddproService,private _router: Router,private route:ActivatedRoute,private FormBuilder:FormBuilder) { }

  ngOnInit() {

    this.addProd = this.FormBuilder.group({
      productId: ['', [Validators.required, Validators.minLength(3)]],
      productname: ['', [Validators.required, Validators.minLength(6)]],
      productprice: ['', [Validators.required,Validators.pattern(/^[1-9]\d*$/)]],
      producturl:['',Validators.required],
      productdiscription:['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]]
  });
  this.route.params.subscribe(params => {
    this._addproService.getProductsByID(params['id']).subscribe(res => {
    console.log(res);
    // this.product = res;
    this.addProd.patchValue(res);
    });
    });
  }
  
  get f() { return this.addProd.controls; }

  updateProduct(prodId,prodName,prodPrice,prodDesc,prodImage){

    this.route.params.subscribe(params =>{
    this._addproService.updateProduct(prodId.value,prodName.value,prodPrice.value,prodDesc.value,prodImage.value,params['id']);
    //this.router.navigate(['/products']);
    // console.log(this.product);
    this._router.navigate(['/add-cart']);
    })
    
    }
}
