import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
  public signUpForm!: FormGroup;
  public errorMessage!: string;

  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * createForm
   */
  public createForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', Validators.required),
      createPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      role: new FormControl(null, Validators.required),
    });
  }

  /**
   * onSubmit
   */
  public onSubmit() {
    if (this.signUpForm.valid) {
      if (
        this.signUpForm.value.createPassword ===
        this.signUpForm.value.confirmPassword
      ) {
        this.errorMessage = '';
        console.log('this.signUpForm.value :>> ', this.signUpForm.value);
      } else {
        this.errorMessage = 'Please write correct password';
      }
      this.signUpForm.reset();
    } else {
      return;
    }
  }
}
