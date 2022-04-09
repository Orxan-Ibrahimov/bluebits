/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '@bluebits/my-orders';
import { ProductsService } from '@bluebits/my-products';
import { UsersService } from '@bluebits/my-users';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private usersService: UsersService,private ordersService:OrdersService, private productsSercvice:ProductsService) {}
  datas: any[] = [];

  ngOnInit(): void {
    combineLatest([
      this.usersService.getUsersCount(),
      this.ordersService.getOrdersCount(),
      this.ordersService.getOrdersSales(),
      this.productsSercvice.getProductsCount(),

    ]).subscribe((values) => {
      this.datas = values;      
    });
  }
}
