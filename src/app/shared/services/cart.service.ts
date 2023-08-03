import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { HotToastService } from '@ngneat/hot-toast';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';
  private totalKey = 'cart-total';
  private cartDataSubject = new BehaviorSubject<CartItem[]>([]);

  constructor(private toast: HotToastService) {
    this.initCartData();
  }

  private initCartData(): void {
    const cartDataString = localStorage.getItem(this.cartKey);
    const cartData = cartDataString ? JSON.parse(cartDataString) : [];
    this.cartDataSubject.next(cartData);
  }

  private setCartData(cartData: CartItem[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartData));
    this.cartDataSubject.next(cartData);
  }


  private bookToCartItem(book: Book): CartItem {
    return {
      title: book.title,
      subtitle: book.subtitle,
      isbn13: book.isbn13,
      price: book.price,
      image: book.image,
      url: book.url,
      quantity: 1 // Default quantity is 1
    };
  }


  addToCart(product: Book): void {
    const cartData = this.cartDataSubject.getValue();
    const existingProduct = cartData.find((item) => item.isbn13 === product.isbn13);
    if(!existingProduct){
      const cartItem: CartItem = this.bookToCartItem(product);
      cartData.push(cartItem);
      this.setCartData(cartData);
      this.toast.success('👍 Item added to cart',{duration: 3000})
    }else{
      this.toast.error('👎Item already exist',{duration: 3000})
    }
  }

  deleteFromCart(productId: number): void {
    let cartData = this.cartDataSubject.getValue();
    cartData = cartData.filter((product) => product.isbn13 !== productId);
    this.setCartData(cartData);
  }

  updateProduct(product: any): void {
    const cartData = this.cartDataSubject.getValue();
    const index = cartData.findIndex((item) => item.isbn13 === product.isbn13);

    if (index !== -1) {
      cartData[index] = product;
      this.setCartData(cartData);
    }
  }

  deleteAll(): void {
    this.setCartData([]);
  }

  getCart(): CartItem[] {
    return this.cartDataSubject.getValue();
  }

    getCartDataObservable(): Observable<CartItem[]> {
      return this.cartDataSubject.asObservable();
    }


}
