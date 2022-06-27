import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUsers from '../reducers/users/users.reducer';

const getUsersFeature = createFeatureSelector<fromUsers.State>(fromUsers.usersFeatureKey);

export const selectUsers = createSelector(
  getUsersFeature,
  (state) => state.users
);
