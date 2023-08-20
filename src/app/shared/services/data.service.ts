import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Book, BookResponse, SingleBook } from '../models/book.model';

@Injectable({
  providedIn: 'any'
})
export class DataService {

  URI : string = 'https://api.itbook.store/1.0'


  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

        errorMessage = `An error occurred: ${err.error.message}`;
    } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}


getBooks(genre: string): Observable<Book[]> {
  return this.http.get<BookResponse>(`${this.URI}/search/${genre}`).pipe(
    map((data) => {
      return data.books.map((book) => {
        return { ...book, price: book.price.replace('$', '') };
      });
    }),
    catchError(this.handleError)
  );
}


getBook(id: string): Observable<SingleBook> {
  return this.http.get<SingleBook>(`${this.URI}/books/${id}`).pipe(
    map((data) => {
      data.price = data.price.replace('$', '')
      return data;
    }),
    catchError(this.handleError)
  );
}

}
