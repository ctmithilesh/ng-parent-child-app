import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchNewsService {

  constructor(private http: HttpClient) {

  }

  fetchNews(): Observable<any> {

    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5497647da2114041ad647eba8e002d6f').pipe(
      retry(1),
      catchError(this.handleError)
    )

  }
  handleError(error: HttpErrorResponse): Observable<never> {

    let errorMessage = 'Something Went Wrong!'


    return throwError(() => errorMessage)

  }

}
