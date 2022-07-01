import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public demoForm!:FormGroup;

  constructor(private auth:AuthService, private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * createForm
   */
  public createForm() {
    this.demoForm = new FormGroup({
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })
  }

  /**
   * onSubmit
   */
  public onSubmit(): void {
    if (this.demoForm.valid) {
      const data = this.demoForm.value;
      this.auth
        .login(data)
        .subscribe((res: any): void => {
          if (res?.statusCode === 200 && res?.data.role === 'teacher') {
            localStorage.setItem('token', res?.data.token);
            this.toastr.success(res?.message);
            this.router.navigate(['/dashboard']);
          } else if (res?.statusCode === 200 && res?.data.role === 'student') {
            localStorage.setItem('token', res?.data.token);
            this.toastr.success(res?.message);
            // this.router.navigate(['/student']);
          } else {
            this.toastr.error("res?.message");
          }
        });
    }
  }

}
