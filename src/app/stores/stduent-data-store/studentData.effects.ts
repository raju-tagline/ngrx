import { StudentsService } from './../../services/students.service';
import { switchMap, map } from 'rxjs/operators';
import {
  student_list,
  student_list_success,
  student_profile,
} from './studentData.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
// import { Apollo, gql } from 'apollo-angular';

// const Get_AllInfo = gql`
//   query ($options: PageQueryOptions) {
//     posts(options: $options) {
//       data {
//         id
//         title
//         body
//       }
//       meta {
//         totalCount
//       }
//     }
//   }
// `;

@Injectable()
export class StudentDataEffect {
  constructor(
    private action$: Actions,
    private students: StudentsService // private apollo: Apollo
  ) {}

  studentData$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(student_list),
      switchMap((action: any): any => {
        return this.students.getStudents().pipe(
          map((res: any) => {
            return student_list_success({ data: res.data });
          })
        );
      })
    );
  });

  // studentData$ = createEffect((): any => {
  //   return this.action$.pipe(
  //     ofType(student_list),
  //     switchMap((action: any): any => {
  //       return this.apollo
  //         .watchQuery({
  //           query: Get_AllInfo,
  //         })
  //         .valueChanges.pipe(
  //           map((data: any) => {
  //           })
  //         );
  //     })
  //   );
  // });

  studentProfile$ = createEffect((): any => {
    return this.action$.pipe(
      ofType(student_profile),
      switchMap((action: any): any => {
        const id = action.id;
        return this.students.getStudentDetail(id).pipe(
          map((resp: any): any => {
            if (resp.statusCode === 200) {
              return student_list_success({ data: resp.data });
            }
          })
        );
      })
    );
  });
}
