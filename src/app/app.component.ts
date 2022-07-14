import { isAuthenticated } from './stores/auth-store/auth.selector';
import { Observable, BehaviorSubject } from 'rxjs';
import { getSpinner } from './stores/shared-store/shared.selector';
import { AppState } from './stores/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-demo';

  public showSpinner!: Observable<boolean>;
  public isLogout = new BehaviorSubject(false);
  public isUserLogin!: boolean;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.showSpinner = this.store.select(getSpinner);
    this.store.select(isAuthenticated).subscribe((resp: any) => {
      this.isUserLogin = localStorage.getItem('token') ? true : resp;
    });
  }

  /**
   * logOut()
   */
  public logOut() {
    localStorage.removeItem('token');
    const isRemoved = localStorage.getItem('token') ? false : true;
    if (isRemoved) {
      this.isUserLogin = false;
    }
    this.router.navigate(['/']);
  }
}
