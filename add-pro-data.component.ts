import { Component, OnInit } from '@angular/core';
import {AddproService} from '../addpro.service';
import {Router, NavigationEnd} from '@angular/router';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-pro-data',
  templateUrl: './add-pro-data.component.html',
  styleUrls: ['./add-pro-data.component.css']
})
export class AddProDataComponent implements OnInit {
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


  deleteProduct(id) {
    this._addproService.deleteProduct(id).subscribe(
      (response) =>{
        console.log("successfully deleted")
      }
    )
  
  }
  refresh(): void {
    window.location.reload();
}
reloading():void{
  window.location.reload();
}
}
