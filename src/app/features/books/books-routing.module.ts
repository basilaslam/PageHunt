import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './components/smart/list-books/list-books.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {path: '', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
