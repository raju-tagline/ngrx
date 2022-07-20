import { CounterService } from './service/counter.service';
import { PostService } from './service/post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-demo';
  constructor(
    private postService: PostService,
    private CounterService: CounterService
  ) {
    this.postService.getAll();
    this.CounterService.getAll();
  }
}
