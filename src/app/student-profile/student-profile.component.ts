import { getStudentProfile } from './../stores/stduent-data-store/studentData.selector';
import { AppState } from './../stores/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { student_profile } from '../stores/stduent-data-store/studentData.action';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentProfile!: any;
  constructor(
    private activedRoute: ActivatedRoute,
    private store: Store<AppState>,
    public router: Router,
  ) {}

  ngOnInit(): void {
    const id: any = this.activedRoute.snapshot.queryParamMap.get('id');
    this.store.dispatch(student_profile({ id: id }));
    this.getStudentData(id);
  }

  /**
   * getStudentData
   */
  public getStudentData(id: string) {
    if (id) {
      this.store.select(getStudentProfile).subscribe((resp: any) => {
        this.studentProfile = resp[id];
      });
    }
  }

  /**
   * viewExamDetails()
   */
  public viewExamDetails(sId: any, examId: any) {
    if (sId && examId) {
      const queryParams = {
        id: sId,
        examId: examId,
      };
      this.router.navigate([], { queryParams });
    }
  }
}
