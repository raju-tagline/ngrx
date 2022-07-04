import { StudentsService } from './../../services/students.service';
import { switchMap, map } from 'rxjs/operators';
import { student_list, student_list_success } from './studentData.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentDataEffect {
  constructor(private action$: Actions, private students: StudentsService) {}

  studentData$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(student_list),
      switchMap((action: any): any => {
        return this.students.getStudents().pipe(
          map((res: any) => {
            return student_list_success({ data:res.data });
          })
        );
      })
    );
  });
}
