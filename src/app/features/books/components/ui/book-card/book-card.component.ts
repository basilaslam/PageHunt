import { Component, Input, HostListener } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book!: Book
constructor(private router: Router, private cartService: CartService){
}
  addToCart(book: Book){

    this.cartService.addToCart(book)

  }
  redirectToBookDetails(id: number) {
    this.router.navigate(['/book', id]);
  }
}
