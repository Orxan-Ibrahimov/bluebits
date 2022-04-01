import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService } from '@bluebits/my-orders';

@Component({
  selector: 'admin-order-details',
  templateUrl: './order-details.component.html',
  styles: [
  ]
})
export class OrderDetailsComponent implements OnInit {

  order:Order;


  constructor(private activeRoute:ActivatedRoute, private ordersService:OrdersService) { }

  ngOnInit(): void {
    this._getOrder();
  }

  private _getOrder(){
    this.activeRoute.params.subscribe(response => {
      this.ordersService.GetOrderById(response.orderId).subscribe(data => {
        this.order = data;
      });
    });
  }
}
