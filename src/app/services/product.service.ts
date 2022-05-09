import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = environment.url+'products/';
  constructor(private http : HttpClient) { }
  getAllProducts(){
  return  this.http.get<Product[]>(this.url)
  }
  addProduct(p:Product){
    return this.http.post(this.url , p) ; 
  }
  updateProduct(){
    
  }

  deleteProduct(id : number){
    return this.http.delete(this.url+id) ; 
  }
}
