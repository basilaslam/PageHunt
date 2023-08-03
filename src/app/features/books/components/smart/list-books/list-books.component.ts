import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { DataService } from 'src/app/shared/services/data.service';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit, OnDestroy{

  books : Book[] | undefined

  subs = new SubSink()

  constructor(private data: DataService){

  }


  ngOnInit(){
    this.subs.add(this.data.getBooks('love').subscribe(data => {this.books = data}))

  }


  ngOnDestroy(){
    this.subs.unsubscribe()
  }

}
