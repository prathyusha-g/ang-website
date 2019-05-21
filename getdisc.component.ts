import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {AddproService} from '../addpro.service';

@Component({
  selector: 'app-getdisc',
  templateUrl: './getdisc.component.html',
  styleUrls: ['./getdisc.component.css']
})
export class GetdiscComponent implements OnInit {
  // specialEvents = [ ]
  products;
  
  constructor(private activatedRoute:ActivatedRoute,private _addproService: AddproService, private _router : Router) { }

  ngOnInit() {
     let id=this.activatedRoute.snapshot.params["_id"];
    this._addproService.getProductsByID(id).subscribe(
      (response)=>{
        this.products=response;
        console.log("products",this.products);
      },
      (err)=>{
        this.products=err;
      }
    )
    
}


}
