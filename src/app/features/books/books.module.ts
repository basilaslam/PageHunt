import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './components/smart/list-books/list-books.component';
import { DataService } from 'src/app/shared/services/data.service';
import { BooksComponent } from './books.component';


@NgModule({
  declarations: [
    ListBooksComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ],
  providers: [DataService]
})
export class BooksModule { }
