import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'books', loadChildren:()=> import('./features/books/books.module').then(m => m.BooksModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
