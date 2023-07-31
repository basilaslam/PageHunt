import { Component } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { DataService } from 'src/app/shared/services/data.service';
import { HotToastService } from '@ngneat/hot-toast';
// import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent{

  books : Book[] | undefined
  toastConfig = {
    duration: 3000,
  }

  constructor(private data: DataService,){

  }


  ngOnInit(){
    this.data.getBooks('love').subscribe(data => {this.books = data})
    console.log('data fetched', this.books)
  }

  addToCart(book: Book){
      // this.cartService.addToCart(book)
  }

}
