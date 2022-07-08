import { SingupComponent } from './../singup/singup.component';
import { AuthEffects } from './../stores/auth-store/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './../home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthReducer } from '../stores/auth-store/auth.reducer';

const routes: Routes = [
  {
    path: 'login',
    component: HomePageComponent,
  },
  {
    path: 'sign-up',
    component: SingupComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  declarations: [HomePageComponent, SingupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
