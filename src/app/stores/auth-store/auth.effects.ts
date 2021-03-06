import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  login,
  loginSuccess,
  loginFail,
  SIGN_UP,
  signupSuccess,
  signupFail,
} from './auth.action';
import { exhaustMap } from 'rxjs';
import { setSpinner } from '../shared-store/shared.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap((action: any): any => {
        return this.auth.login(action.loginData).pipe(
          map((res: any): any => {
            this.store.dispatch(setSpinner({ spinner: false }));
            if (res?.statusCode === 200 && res?.data.role === 'teacher') {
              localStorage.setItem('token', res?.data.token);
              this.toastr.success(res?.message);
              // this.router.navigate(['/dashboard']);
              return loginSuccess(res.data);
            } else if (
              res?.statusCode === 200 &&
              res?.data.role === 'student'
            ) {
              localStorage.setItem('token', res?.data.token);
              this.toastr.success(res?.message);
              // this.router.navigate(['/student']);
              return loginSuccess(res.data);
            } else {
              this.toastr.error(res?.message);
              return loginFail({ errorMessage: res?.message });
            }
          })
        );
      })
    );
  });

  signUp$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(SIGN_UP),
      exhaustMap((action: any): any => {
        return this.auth.signUp(action?.signupData).pipe(
          map((res: any): any => {
            if (res?.statusCode === 200 && res?.data.role === 'teacher') {
              localStorage.setItem('token', res?.data.token);
              this.toastr.success(res?.message);
              // this.router.navigate(['/dashboard']);
              return loginSuccess(res.data);
            } else if (
              res?.statusCode === 200 &&
              res?.data.role === 'student'
            ) {
              localStorage.setItem('token', res?.data.token);
              this.toastr.success(res?.message);
              // this.router.navigate(['/student']);
              return signupSuccess(res.data);
            } else {
              this.toastr.error(res?.message);
              return signupFail({ errorMessage: res?.message });
            }
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    (): any => {
      return this.actions$.pipe(
        map((data: any) => {
          if (data?.token && data?.role === 'teacher') {
            this.router.navigate(['/dashboard']);
          } else if (data?.token && data?.role === 'student') {
            this.router.navigate(['/counter']);
          }
        })
      );
    },
    {
      dispatch: false,
    }
  );
}
