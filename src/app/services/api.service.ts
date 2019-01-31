import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Company } from '@models/company.model';
import { User } from '@models/user.model';
import { BaseResponse } from '@models/base-response.model';


const ENDPOINTS = {
  GET_COMPANYS: '../assets/json/data.json',
  GET_CANDIDATES: 'https://randomuser.me/api?results=10',
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

  getCompanys(): Observable<BaseResponse<Company[]>> {
    return this.http.get(ENDPOINTS.GET_COMPANYS)
      .pipe(
        map((resp: BaseResponse<Company[]>) => {
          if (resp) {
            return resp;
          }

          return null;
        }),
        catchError(this.handleError<any>('getCompanys'))
      );
  }

  getCompanyProfile(Id: number): Observable<BaseResponse<Company[]>> {
    return this.http.get(ENDPOINTS.GET_COMPANYS)
      .pipe(
        map((resp: BaseResponse<Company[]>) => {
          if (resp) {
            return resp.data.filter(item => item.Id === Id);
          }

          return null;
        }),
        catchError(this.handleError<any>('getCompanyProfile'))
      );
  }

  getCandidates(): Observable<BaseResponse<User[]>> {
    return this.http.get(ENDPOINTS.GET_CANDIDATES)
      .pipe(
        map((resp: BaseResponse<User[]>) => {
          if (resp) {
            return resp;
          }

          return null;
        }),
        catchError(this.handleError<any>('getCandidates'))
      );
  }
}
