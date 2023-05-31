import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Provincia, Raee } from '../interfaces/raee.interface';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RaeeService {


  public exportedValue: any;

  private baseUrl: string = 'https://trazatic-api.azurewebsites.net/api/objetos';

  constructor(private http: HttpClient) { }


  private getRaeeRequest(url:string): Observable<Raee[]>{
    return this.http.get<Raee[]>(url)
    .pipe(
      catchError(error => of([])),
      );
  }

  getRaee():Observable<Raee[]>{
    return this.http.get<Raee[]>(`${this.baseUrl}`);
  }


  searchRaeeId (term:string):Observable<Raee[]>{
    if (!term)return this.getRaee();
    const url = `${this.baseUrl}/?`+'idlectura'+`=${term}`;
    console.log(this.getRaeeRequest(url))
    return this.getRaeeRequest(url)
    .pipe(
      catchError(error => of([])),
      );
    }

    searchRaeeRegion (term:string):Observable<Raee[]>{
      if (!term||term==='---')return this.getRaee();
      const url = `${this.baseUrl}/?`+'region'+`=${term}`;
      console.log(this.getRaeeRequest(url))
      return this.getRaeeRequest(url)
      .pipe(
        catchError(error => of([])),
        );
      }

      searchRaeeEtiqueta (term:string):Observable<Raee[]>{
        if (!term||term==='---')return this.getRaee();
        const url = `${this.baseUrl}/?`+'etiqueta'+`=${term}`;
        console.log(this.getRaeeRequest(url))
        return this.getRaeeRequest(url)
        .pipe(
          catchError(error => of([])),
          );
        }

        searchRaeeDate (date1:string,date2:string):Observable<Raee[]>{
          if (!date1||!date2)return this.getRaee();
          const url = `${this.baseUrl}/?`+'fechaInicio'+`=${date1}`+'&fechaFin'+`=${date2}'`;
          console.log(this.getRaeeRequest(url))
          return this.getRaeeRequest(url)
          .pipe(
            catchError(error => of([])),
            );
          }




}
