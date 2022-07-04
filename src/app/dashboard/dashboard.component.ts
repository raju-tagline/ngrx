import { IgetStudents } from './../stores/student-store/student.state';
import { addPost } from './../stores/student-store/student.action';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getStudent } from './../stores/student-store/student.selector';
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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.craeteForm();
    this.studentsData$ = this.store.select(getStudent);
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
        sId = res[res.length - 1].id + 1;
      });
      const data: any = {
        id: sId,
        name: this.addForm.value.name,
      };
      this.store.dispatch(addPost({ student: data }));
    } else {
      return;
    }
  }
}
