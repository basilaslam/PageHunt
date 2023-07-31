import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book!: Book

constructor(){}


  addToCart(book: Book){

    // this.cartService.addToCart(book)

  }

}