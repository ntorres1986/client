const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8080/api/";

import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Customer } from './model/customer';
import { Card } from './model/card';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //Customers
  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(apiUrl + "customers")
      .pipe(
        tap(customers => console.log('fetched customers')),
        catchError(this.handleError('getCustomers', []))
      );
  }
  
  getCustomer(id: number): Observable<Customer> {
    const url = `${apiUrl}/customers/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(_ => console.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }
  
  addCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(apiUrl + "customers/add", customer, httpOptions).pipe(
      tap((customer: Customer) => console.log(`added product w/ id=${customer.id}`)),
      catchError(this.handleError<Customer>('addCustomer'))
    );
  }
  
  updateCustomer (id, customer): Observable<any> {
    const url = `${apiUrl}customers/${id}`;
    return this.http.put(url, customer, httpOptions).pipe(
      tap(_ => console.log(`updated customer id=${id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }
  
  deleteCustomer(id): Observable<Customer> {
    const url = `${apiUrl}customers/${id}`;
  
    return this.http.delete<Customer>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted customer id=${id}`)),
      catchError(this.handleError<Customer>('deleteCustomer'))
    );
  }

  //Cards
  getCards(id): Observable<Card[]> {
    return this.http.get<Card[]>(`${apiUrl}cards/${id}`)
      .pipe(
        tap(cards => console.log('fetched cards')),
        catchError(this.handleError('getCards', []))
      );
  }
  addCard(card): Observable<Card> {
    return this.http.post<Card>(apiUrl + "card/add", card, httpOptions).pipe(
      tap((customer: Card) => console.log(`added card w/ id=${card.id}`)),
      catchError(this.handleError<Card>('addCard'))
    );
  }
}
