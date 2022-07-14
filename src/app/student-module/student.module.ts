import { ActiveStudentEffects } from './../stores/active-student-store/active-student.effects';
import { ACTIVE_STUDENTS } from './../stores/active-student-store/active-student.action';
import { StudentProfileComponent } from './../student-profile/student-profile.component';
import { GET_STUDENT_LIST } from './../stores/stduent-data-store/studentData.action';
import { StudentDataEffect } from './../stores/stduent-data-store/studentData.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { studentDataListReducer } from '../stores/stduent-data-store/studentData.reducer';
import { activeStudentReducer } from '../stores/active-student-store/active-student.reducer';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'student-profile',
    component: StudentProfileComponent,
  },
  {
    path: 'student-profile/:id',
    component: StudentProfileComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent,StudentProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(GET_STUDENT_LIST,studentDataListReducer),
    EffectsModule.forFeature([StudentDataEffect]),
    // StoreModule.forFeature(ACTIVE_STUDENTS, activeStudentReducer),
    // EffectsModule.forFeature([ActiveStudentEffects]),
  ],
})
export class StudentModule {}
