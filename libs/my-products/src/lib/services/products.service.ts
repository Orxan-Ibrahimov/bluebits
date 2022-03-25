import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  ApiUrl = environment.API_URL + 'products';

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.ApiUrl);
  }

  // addProduct(product:Product):Observable<Product>{
  //   return this.http.post<Product>(this.ApiUrl,product);
  // }

  getProductById(productId:string):Observable<Product>{
    return this.http.get<Product>(`${this.ApiUrl}/${productId}`);
  }

  addProduct(product:FormData):Observable<Product>{
    return this.http.post<Product>(this.ApiUrl,product);
  }

  updateProduct(product:FormData,productId:string){
    return this.http.put(`${this.ApiUrl}/${productId}`,product);
  }

  // updateProduct(product:Product){
  //   return this.http.put(`${this.ApiUrl}/${product.id}`,product);
  // }
}
