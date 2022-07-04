import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'dashboard',
    loadChildren:() => import('./student-module/student.module').then((m) => m.StudentModule)
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter-module/counter.module').then((m) => m.CounterModule),
  },
  {
    path:'**',
    redirectTo:'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
