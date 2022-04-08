/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';
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

  getOrdersSales():Observable<number>{
    return this.http.get<number>(`${this.ApiUrl}/get/totalSales`).pipe(map((value:any) => value.totalSales));
  }

  getOrdersCount():Observable<number>{
    return this.http.get<number>(`${this.ApiUrl}/get/count`).pipe(map((value:any) => value.orderCount));
  }


  GetOrderById(orderId:string):Observable<Order>{
    return this.http.get<Order>(`${this.ApiUrl}/${orderId}`);
  }

  UpdateStatus(orderStatus:{status:string},orderId:string):Observable<Order>{
    return this.http.put<Order>(`${this.ApiUrl}/${orderId}`,orderStatus);
  }
}
