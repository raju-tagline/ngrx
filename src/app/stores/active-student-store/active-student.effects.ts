import {
  getActiveStudent,
  getActiveStudentSuccess,
  getActiveStudentFail,
} from './active-student.action';
import { StudentsService } from './../../services/students.service';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs';

@Injectable()
export class ActiveStudentEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private student: StudentsService
  ) {}

  activeStudent$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(getActiveStudent),
      exhaustMap((action: any): any => {
        return this.student.verifyStudentForExam().pipe(
          map((data: any): any => {
            return getActiveStudentSuccess(data.data);
          }),
          catchError((err: any): any => {
            return getActiveStudentFail(err);
          })
        );
      })
    );
  });
}
