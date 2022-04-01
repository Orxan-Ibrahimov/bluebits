import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService } from '@bluebits/my-orders';
import { STATUSES } from '../global/Status';

@Component({
  selector: 'admin-order-details',
  templateUrl: './order-details.component.html',
  styles: [
  ]
})
export class OrderDetailsComponent implements OnInit {

  order:Order;
  orderStatusses = [];
  selectedStatus;

  constructor(private activeRoute:ActivatedRoute, private ordersService:OrdersService) { }

  ngOnInit(): void {
    this._mapOrderStatus();
    this._getOrder();
  }

 private _mapOrderStatus(){
   this.orderStatusses = Object.keys(STATUSES).map(statusKey => {
     return {
       id:statusKey,
       name: STATUSES[statusKey].name
     }
   });
   console.log(this.orderStatusses);
   
  }
  private _getOrder(){
    this.activeRoute.params.subscribe(response => {
      this.ordersService.GetOrderById(response.orderId).subscribe(data => {
        this.order = data;
        this.selectedStatus = this.order.status;
      });
    });
  }

  ChangeStatus(event){
    this.ordersService.UpdateStatus({status: event.value},this.order.id).subscribe(data => {
      this.order = data;
    });
  }
}
