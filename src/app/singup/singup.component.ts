import { signup } from './../stores/auth-store/auth.action';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/app.state';
import { setSpinner } from '../stores/shared-store/shared.action';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
  public signUpForm!: FormGroup;
  public errorMessage!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * createForm
   */
  public createForm() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl(null, Validators.required),
    });
  }

  /**
   * onSubmit
   */
  public onSubmit() {
    if (this.signUpForm.valid) {
      this.errorMessage = '';
      const data = this.signUpForm.value;
      this.store.dispatch(signup({ signupData: data }));
      this.signUpForm.reset();
    } else {
      return;
    }
  }
}
