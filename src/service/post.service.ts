import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostDataListService {
  public basePath = this.db.database.ref('/posts');
  constructor(private db: AngularFireDatabase) {}

  public getAllCarts(): any {
    return new Promise((resolve, reject) => {
      this.basePath.on('value', (data: any) => {
        const allCarts = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            id: key,
          };
        });
        resolve(allCarts);
      });
    });
  }
}
