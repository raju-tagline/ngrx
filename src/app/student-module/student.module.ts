import { DashboardComponent } from './../dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [CommonModule,ReactiveFormsModule, FormsModule, RouterModule.forChild(routes)],
})
export class StudentModule {}