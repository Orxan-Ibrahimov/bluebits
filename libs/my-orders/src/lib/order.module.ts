import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: []
})
export class OrderModule { 

  constructor(cartService:CartService) {
    cartService._InitializeCart();
  }


}
