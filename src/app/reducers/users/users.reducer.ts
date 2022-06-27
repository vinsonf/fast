import { Action, createReducer, on } from '@ngrx/store';

import { actionAddUser, actionSelectUserId } from 'src/app/actions/users.actions';
export interface User {
  id: number;
  name: string;
  email: string;
}

export const usersFeatureKey = 'users';

export interface State {
  selectedId: number | null;
  users: User[];
}

export const initialState: State = {
  users: [{id: 1, name: 'John', email: 'test'}],
  selectedId: null,
};

export const reducer = createReducer(
  initialState,
  on(
    actionAddUser,
    (state, action) => {
      return {
        ...state,
        users: [...state.users, action.user],
      }
    }),
    on(actionSelectUserId,(
      state, action
    ) => {
      return {
        ...state,
        selectedId: action.id
      }
    })
);
