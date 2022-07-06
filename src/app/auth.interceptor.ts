import { Store } from '@ngrx/store';
import { AppState } from './stores/app.state';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAuth } from './stores/auth-store/auth.selector';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token') || '';
    // this.store.select(getAuth).subscribe((resp: any) => {
    //   token = resp;
    // });
    request = request.clone({
      setHeaders: { 'access-token': `${token}` },
    });
    return next.handle(request);
  }
}
