import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { login, loginSuccess, loginFail } from './auth.action';
import { exhaustMap } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap((action: any): any => {
        return this.auth.login(action.loginData).pipe(
          map((res: any): any => {
            if (res?.statusCode === 200 && res?.data.role === 'teacher') {
              localStorage.setItem('token', res?.data.token);
              this.toastr.success(res?.message);
              this.router.navigate(['/dashboard']);
            } else if (
              res?.statusCode === 200 &&
              res?.data.role === 'student'
            ) {
              localStorage.setItem('token', res?.data.token);
              this.toastr.success(res?.message);
              this.router.navigate(['/student']);
            } else {
              this.toastr.error('res?.message');
            }
            return loginSuccess();
          }),
          catchError((err: any): any => {
            return loginFail();
          })
        );
      })
    );
  });
}
