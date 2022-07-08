import { Router } from '@angular/router';
import { getStudent } from './../stores/stduent-data-store/studentData.selector';
import { student_list } from './../stores/stduent-data-store/studentData.action';
import { ToastrService } from 'ngx-toastr';
import {
  addPost,
  deletePost,
  updatePost,
} from './../stores/student-store/student.action';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from './../stores/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public studentsData$!: Observable<any>;
  public addForm!: FormGroup;
  public submitBtn: boolean = false;
  public updateId!: any;

  constructor(
    private store: Store<AppState>,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.craeteForm();
    this.studentsData$ = this.store.select(getStudent);
    this.store.dispatch(student_list());
  }

  /**
   * craeteForm
   */
  public craeteForm() {
    this.addForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

  /**
   * onSubmit()
   */
  public onSubmit() {
    if (this.addForm.valid) {
      let sId = '';
      this.store.select(getStudent).subscribe((res: any) => {
        sId = res[res?.length - 1]?.id ? res[res?.length - 1]?.id + 1 : 101;
      });
      if (!this.updateId) {
        const data: any = {
          id: sId,
          name: this.addForm.value.name,
        };
        this.store.dispatch(addPost({ student: data }));
        this.toastr.success('Data added!!');
      } else {
        const data: any = {
          id: this.updateId,
          name: this.addForm.value.name,
        };
        this.store.dispatch(updatePost({ student: data }));
        this.toastr.success('Data updateded!!');
      }
    } else {
      return;
    }
  }

  /**
   * updateData
   */
  public updateData(sId: any) {
    const queryParams = {
      id: sId,
    };
    this.router.navigate([`/dashboard/student-profile`], { queryParams });
  }

  /**
   * deleteData
   */
  public deleteData(student: any) {
    if (student) {
      this.store.dispatch(deletePost({ id: student }));
    }
  }
}
