import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from '../stores/counter-store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public counter: number = 0;

  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((res: any) => {
      this.counter = res.counte;
    });
  }

  /**
   * onIncrement
   */
  public onIncrement() {
    this.store.dispatch(increment());
  }

  /**
   * onDecrement
   */
  public onDecrement() {
    this.store.dispatch(decrement());
  }

  /**
   * onReset
   */
  public onReset() {
    this.store.dispatch(reset());
  }
}
