import { Icounter } from './../stores/counter-store/counter.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
  customIncrement,
} from '../stores/counter-store/counter.action';
import { Subscription } from 'rxjs';
import { getCounter } from '../stores/counter-store/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, OnDestroy {
  public counter: number = 0;
  public subScription!: Subscription;
  public value!: number;

  constructor(private store: Store<{ counter: Icounter }>) {}

  ngOnInit(): void {
    this.subScription = this.store.select(getCounter).subscribe((res: any) => {
      this.counter = res;
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

  /**
   * addValue()
   */
  public addValue() {
    this.store.dispatch(
      customIncrement({
        value: +this.value,
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subScription) {
      this.subScription.unsubscribe();
    }
  }
}
