import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: CartItem | undefined
  @Output() childEvent = new EventEmitter();


  constructor(private cartService: CartService){}



  updateQuantity(item: any, quantity: number): void {
    item.quantity = quantity;
    this.cartService.updateProduct(item);
    this.emitUpdateCartEvent()
  }

  removeItem(item: CartItem): void {
    this.cartService.deleteFromCart(item.isbn13);
    this.emitUpdateCartEvent()
  }

  emitUpdateCartEvent(){
    this.childEvent.emit()
  }



}
