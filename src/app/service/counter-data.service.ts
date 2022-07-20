import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterDataService extends DefaultDataService<any> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Counter', http, httpUrlGenerator);
  }

  override getAll(): Observable<any[]> {
    return this.http.get<any>('counter api is calling');
  }
}
