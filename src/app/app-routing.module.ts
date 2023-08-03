import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'books', loadChildren:()=> import('./features/books/books.module').then(m => m.BooksModule)},
  {path: 'cart', loadChildren:()=> import('./features/cart/cart.module').then(m => m.CartModule)},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
