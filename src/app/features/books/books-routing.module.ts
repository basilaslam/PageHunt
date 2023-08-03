import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { SigleBookComponent } from './components/smart/sigle-book/sigle-book.component';

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'book/:id', component: SigleBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
