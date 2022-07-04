import { createAction, props } from '@ngrx/store';


export const ADD_POST_ACTION = '[POSTS PAGE] Add Post';
export const addPost = createAction(ADD_POST_ACTION, props<{ student:any }>())