import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerServiceService } from 'src/app/shared/services/error-handling.service';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private errorHandlerServiceService:ErrorHandlerServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandlerServiceService.handleError(error)
        return throwError(error);
      })
    );
  }
}
