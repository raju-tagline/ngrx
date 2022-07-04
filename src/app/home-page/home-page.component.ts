import { login } from './../stores/auth-store/auth.action';
import { AppState } from './../stores/app.state';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public demoForm!: FormGroup;

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * createForm
   */
  public createForm() {
    this.demoForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  /**
   * onSubmit
   */
  public onSubmit(): void {
    if (this.demoForm.valid) {
      const data = this.demoForm.value;
      this.store.dispatch(login({ loginData: data }));
    } else {
      return;
    }
  }
}
