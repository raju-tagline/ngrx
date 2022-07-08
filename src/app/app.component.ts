import { isAuthenticated } from './stores/auth-store/auth.selector';
import { Observable } from 'rxjs';
import { getSpinner } from './stores/shared-store/shared.selector';
import { AppState } from './stores/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-demo';

  public showSpinner!: Observable<boolean>;
  public isLogin$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.showSpinner = this.store.select(getSpinner);
    this.isLogin$ = this.store.select(isAuthenticated);
  }

  /**
   * logOut()
   */
  public logOut() {
    this.isLogin$.subscribe((res: any) => {
      if (res) {
        localStorage.removeItem('token');
      }
    });
  }
}
