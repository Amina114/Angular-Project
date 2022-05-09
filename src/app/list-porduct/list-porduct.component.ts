import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-porduct',
  templateUrl: './list-porduct.component.html',
  styleUrls: ['./list-porduct.component.css']
})
export class ListPorductComponent implements OnInit {
    public title : string;
    public list : Product[] ;  
    public priceMax : any; 
    constructor( private productService :ProductService) { }

  ngOnInit():void  {
    this.title='Eshop2' ;
    this.productService.getAllProducts().subscribe(
      (response: Product[])=>{
        this.list=response
      },
      ()=>{},
      ()=>{}
      ); 
    
   
  }
  incrementLike(product:Product) : void{
    let i = this.list.indexOf(product) ;
    if(i!=-1){
      this.list[i].like++ ; 
    }
 
  }
  buyProduct(product:Product) : void{
    let i = this.list.indexOf(product) ;
    if(i!=-1){
      this.list[i].quantity-- ; 
    }

}
deleteProduct(product:Product) : void{
  let i = this.list.indexOf(product) ;
  if(i!=-1){
   this.productService.deleteProduct(product.id).subscribe(
  ()=> {this.list.splice(i ,1)}
)
  }
}
}
