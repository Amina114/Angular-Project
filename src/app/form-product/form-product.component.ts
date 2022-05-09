import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product : Product ; 
  constructor( private productService : ProductService , private route : Router) { }
  ngOnInit(): void {
    this.product = new Product() ; 

  }
  save():void{
    console.log(this.product) ; 
    this.product.like=0;
   this.productService.addProduct(this.product).subscribe(
     ()=>{ this.route.navigate(['/home'])}
   )
   
    // ki nheb neb3ath id f url (fazet detail produit ) nzid id f path 
  }

}
