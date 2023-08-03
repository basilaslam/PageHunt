import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './components/smart/list-books/list-books.component';
import { DataService } from 'src/app/shared/services/data.service';
import { BooksComponent } from './books.component';
import { BookCardComponent } from './components/ui/book-card/book-card.component';
import { SigleBookComponent } from './components/smart/sigle-book/sigle-book.component';
import { toInrPipe } from 'src/app/shared/pipes/toINR.pipe';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    ListBooksComponent,
    BooksComponent,
    BookCardComponent,
    SigleBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [DataService]
})
export class BooksModule { }
