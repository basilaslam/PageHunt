import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.cartItems = this.cartService.getCart();
    this.calculateTotalCartPrice()
  }

calculateTotalCartPrice(): void {
   let sum: number = 0
  this.cartItems.map((item) => {
    sum += parseFloat(item.price) * item.quantity
  } )


  this.cartTotal = Number(sum.toFixed(2))
  }


  updateCartData(){
    this.cartItems = this.cartService.getCart()
    this.calculateTotalCartPrice()
  }

  handleUpdateEvent(){
    this.updateCartData()
  }

}
