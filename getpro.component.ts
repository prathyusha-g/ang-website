import { Component, OnInit } from '@angular/core';
import {AddproService} from '../addpro.service';
import {Router} from '@angular/router';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-getpro',
  templateUrl: './getpro.component.html',
  styleUrls: ['./getpro.component.css']
})
export class GetproComponent implements OnInit {
    addProd: FormGroup;
    submitted = false;
    resp;
    products;
    
  constructor(private _addproService: AddproService,private _router: Router,private FormBuilder:FormBuilder) { }

  ngOnInit() {
    this._addproService.getProduct().subscribe(
      (response)=>{
        this.products=response;
      }
    )
   
    this.addProd = this.FormBuilder.group({
      productId: ['', [Validators.required, Validators.minLength(3)]],
      productname: ['', [Validators.required, Validators.minLength(6)]],
      productprice: ['', [Validators.required,Validators.pattern(/^[1-9]\d*$/)]],
      producturl:['',Validators.required],
      productdiscription:['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]]
  });

  }
  get f() { return this.addProd.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addProd.invalid) {
        return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addProd.value));

    this._addproService.addProduct(this.addProd.value).subscribe(
      (response) =>{
        this.resp = response;
        // alert(this.resp.message);
        console.log(this.resp.message);           
      },
      (error) => {
        console.log(error);    
      }
    )
  }
    
}

