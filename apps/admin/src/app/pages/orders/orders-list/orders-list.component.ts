import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '@bluebits/my-orders';

const STATUSES = {
  0: {
    name: 'Pending',
    color: 'primary',
  },
  1: {
    name: 'Processed',
    color: 'warning',
  },
  2: {
    name: 'Shipped',
    color: 'success',
  },
  3: {
    name: 'Delivered',
    color: 'info',
  },
  4: {
    name: 'Failed',
    color: 'danger',
  },
};

@Component({
  selector: 'admin-orders-list',
  templateUrl: './orders-list.component.html',
  styles: [],
})
export class OrdersListComponent implements OnInit {
  orders = [];
  orderStatus = STATUSES;

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this._OrderList();
  }

  private _OrderList() {
    this.ordersService.GetOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  showOrder(orderId: string) {
    this.router.navigateByUrl(`orders/${orderId}`);
  }
}
