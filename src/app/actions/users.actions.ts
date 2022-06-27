import { createAction, props } from '@ngrx/store';
import { User } from '../reducers/users/users.reducer';

export const actionAddUser = createAction(
  '[Users] add User',
  props<{ user: User }>()
);

export const actionSelectUserId = createAction(
  '[Users] Select User Id',
  props<{ id: number }>()
);




