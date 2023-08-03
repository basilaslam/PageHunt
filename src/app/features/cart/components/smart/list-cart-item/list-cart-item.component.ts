import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-list-cart-item',
  templateUrl: './list-cart-item.component.html',
  styleUrls: ['./list-cart-item.component.css']
})
export class ListCartItemComponent {

  @Input() cartItems : CartItem[] | undefined
  @Input() cartTotal: number | undefined
  @Output() childEvent = new EventEmitter();

  constructor(private cartService: CartService) {}

  removeAllItems(): void {
      this.cartService.deleteAll();
      this.emitUpdateCartEvent()

  }

  emitUpdateCartEvent(){
    this.childEvent.emit()
  }


}
