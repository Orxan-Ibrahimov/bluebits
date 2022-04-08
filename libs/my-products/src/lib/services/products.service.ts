import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  ApiUrl = environment.API_URL + 'products';

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.ApiUrl);
  }

  getProductsCount():Observable<number>{
    return this.http.get<number>(`${this.ApiUrl}/get/count`).pipe(map((value:any) => value.productCount));
  }

  getProductById(productId:string):Observable<Product>{
    return this.http.get<Product>(`${this.ApiUrl}/${productId}`);
  }

  addProduct(product:FormData):Observable<Product>{
    return this.http.post<Product>(this.ApiUrl,product);
  }

  updateProduct(product:FormData,productId:string){
    return this.http.put(`${this.ApiUrl}/${productId}`,product);
  }

  deleteProduct(productId:string):Observable<Product>{
    return this.http.delete<Product>(`${this.ApiUrl}/${productId}`);
  }
}
