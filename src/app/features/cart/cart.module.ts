import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { ListCartItemComponent } from './components/smart/list-cart-item/list-cart-item.component';
import { CartItemComponent } from './components/ui/cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartComponent,
    ListCartItemComponent,
    CartItemComponent,
  ],
  imports: [
    CartRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
