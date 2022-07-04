import { ToastrService } from 'ngx-toastr';
import { IgetStudents } from './../stores/student-store/student.state';
import { addPost, deletePost, updatePost } from './../stores/student-store/student.action';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  getStudent,
  getStudentById,
} from './../stores/student-store/student.selector';
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
  public updateId!:number 

  constructor(private store: Store<AppState>, private toastr:ToastrService) {}

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
        sId = res[res?.length - 1]?.id ? res[res?.length - 1]?.id + 1 : 101;
      });
      if(!this.updateId){
        const data: any = {
          id: sId,
          name: this.addForm.value.name,
        };
        this.store.dispatch(addPost({ student: data }));
        this.toastr.success("Data added!!");
      } else{
        const data: any = {
          id: this.updateId,
          name: this.addForm.value.name,
        };
        this.store.dispatch(updatePost({ student: data }));
        this.toastr.success("Data updateded!!");
      }
    } else {
      return;
    }
  }

  /**
   * updateData
   */
  public updateData(sId: any) {
    if(sId){
      this.submitBtn = true;
      const id = sId;
      this.updateId = id;
      this.store.select(getStudentById, { id }).subscribe((resp: any) => {
        this.addForm.patchValue({ name: resp.name });
      });
    } 
  }

  /**
   * deleteData
   */
  public deleteData(student: any) {
    if(student){
      this.store.dispatch(deletePost({ id:student }))
    }
  }
}
