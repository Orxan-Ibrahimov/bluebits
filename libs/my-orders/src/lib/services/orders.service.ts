import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  ApiUrl = environment.API_URL + 'orders';

  GetOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.ApiUrl);
  }
  GetOrderById(orderId:string):Observable<Order>{
    return this.http.get<Order>(`${this.ApiUrl}/${orderId}`);
  }
}
