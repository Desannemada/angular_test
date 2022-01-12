import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Developer } from 'src/models/developer/developer';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  url = 'https://61d4ad578df81200178a8df9.mockapi.io/api/v1/developer';

  constructor(private http: HttpClient) {}

  getDevelopers(): Observable<Developer[]> {
    return this.http
      .get<Developer[]>(`${this.url}`)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError('Algo deu errado. Tente novamente mais tarde!');
  }
}
