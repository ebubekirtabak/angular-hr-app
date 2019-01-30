import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Company } from '@models/company.model';


const ENDPOINTS = {
  GET_COMPANYS: '../assets/json/data.json',
};
@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getCompanys(): Observable<Company[]> {
    return this.http.get(ENDPOINTS.GET_COMPANYS)
      .pipe(
        map((resp) => {
          if (resp) {
            return resp;
          }

          return null;
        }),
        catchError(this.handleError<any>('vehicleDetail'))
      );
  }
}
