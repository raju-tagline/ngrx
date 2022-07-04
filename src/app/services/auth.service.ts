import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.url;

  constructor(private http: HttpClient) {}

  public login(login: any): Observable<any> {
    return this.http.post<any>(`${this.url}users/Login`, login);
  }
}
