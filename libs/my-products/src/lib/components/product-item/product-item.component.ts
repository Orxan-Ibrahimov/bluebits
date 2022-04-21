import { Component, Input, OnInit } from '@angular/core';
import { CartItem, CartService } from '@bluebits/my-orders';
import { Product } from '../../models/product';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styles: [],
})
export class ProductItemComponent implements OnInit {
  constructor(private cartService: CartService) {}

  @Input() product: Product;

  ngOnInit(): void {}

  AddToCart() {
    const catItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
    };
    this.cartService.setProduct(catItem);
  }
}
