import { StoreModule } from '@ngrx/store';
import { CounterComponent } from '../counter/counter.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { counterReducer } from '../stores/counter-store/counter.reducer';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('counter', counterReducer),
  ],
})
export class CounterModule {}
