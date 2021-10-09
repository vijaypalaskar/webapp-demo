import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:5000/api/hotel/'; 
  getOrders(): Observable<any> {
    return this.http.get<any>(`${this.url}orders`).pipe(catchError(this.errorHandler));
  }

  getProducts() {
    return this.http.get<any>(`${this.url}products`).pipe(catchError(this.errorHandler));
  }

  submiAddOrder(data: object): Observable<any> {
    return this.http.post<object>(`${this.url}add-order`, data).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
