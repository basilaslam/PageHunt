import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleBook } from 'src/app/shared/models/book.model';
import { CartItem } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { DataService } from 'src/app/shared/services/data.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-sigle-book',
  templateUrl: './sigle-book.component.html',
  styleUrls: ['./sigle-book.component.css']
})
export class SigleBookComponent implements OnInit{

  bookId : number | undefined
  book : SingleBook | undefined
  subs = new SubSink()
  constructor(

    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private cartService: CartService){}


  ngOnInit(): void {

    this.subs.add(this.activatedRoute.params.subscribe(params =>{
      this.bookId = params['id']
    }))

      if(this.bookId){

        this.subs.add(this.dataService.getBook(String(this.bookId)).subscribe(book=>{
          this.book = book
        }))

      }



  }

  addToCart(book: SingleBook ){


    // Extract only the needed details for the CartItem
    const cartItem: CartItem = {
      title: book.title,
      subtitle: book.subtitle,
      isbn13: Number(book.isbn13),
      price: book.price,
      image: book.image,
      url: book.url,
      quantity: 1 // You can set the initial quantity here
    }
    this.cartService.addToCart(cartItem)

  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }


}
