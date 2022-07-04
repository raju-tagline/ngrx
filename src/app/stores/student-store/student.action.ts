import { createAction, props } from '@ngrx/store';

export const ADD_POST_ACTION = '[POSTS PAGE] Add Post';
export const UPDATE_POST_ACTION = '[POSTS PAGE] Update Post';
export const DELETE_POST_ACTION = '[POSTS PAGE] Delete Post';

export const addPost = createAction(ADD_POST_ACTION, props<{ student: any }>());

export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ student: any }>()
);

export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: number }>()
);
