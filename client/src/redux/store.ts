import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modal/modalReducer';
import groupReducer from './slices/groups/groupReducer';
import studentReducer from './slices/students/studentReduser';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    groupsSlice: groupReducer,
    studentsSlice: studentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
