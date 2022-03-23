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
}
