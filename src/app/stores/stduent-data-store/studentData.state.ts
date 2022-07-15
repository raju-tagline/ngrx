// ------------->>BEFORE ENTITY<<-------------

// export interface IStudentData {
//   posts: any[];
// }

// export const initialState: IStudentData = {
//   posts: [],
// };

// ------------->>AFTER ENTITY<<-------------

import { createEntityAdapter, EntityState } from '@ngrx/entity';

interface Post {
  status: string;
  _id: string;
  name: string;
  email: string;
}
export interface Posts {
  posts: Post[];
}

export interface IStudentData extends EntityState<any> {}

export const postsAdapter = createEntityAdapter<any>({
  selectId: (res: any): any => {
    return res._id;
  },
});

export const initialState: IStudentData = postsAdapter.getInitialState();
