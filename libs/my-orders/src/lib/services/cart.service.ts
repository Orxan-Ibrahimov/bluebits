import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  CART_KEY = 'cart';

  _InitializeCart() {
    const cartJson = localStorage.getItem(this.CART_KEY);
    const cart = JSON.parse(cartJson);
    if (!cart) {
      const newCart: Cart = {
        cartItems: [],
      };
      localStorage.setItem(this.CART_KEY, JSON.stringify(newCart));
      return cart;
    }

    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }

  getCart(): Cart {
    const cartJson = localStorage.getItem(this.CART_KEY);
    const cart = JSON.parse(cartJson);
    return cart;
  }

  setProduct(cartItem: CartItem): Cart {
    const cart = this.getCart();
    cart.cartItems.push(cartItem);
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
    return cart;
    // if (cart) {
    //   cart = cart.cartItems.map((cartItem) => {
    //     return
    //   });
    // } else {
    // }
  }
}
