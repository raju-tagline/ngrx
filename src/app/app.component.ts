import { PostDataListService } from './../service/post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-demo';
  constructor(private postDataListService: PostDataListService) {
    this.postDataListService.getAllCarts().then((data: any) => {
      console.log('data :>> ', data);
    });
  }
}
