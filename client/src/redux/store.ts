import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './slices/notes/notesSlice';
import authReducer from './slices/auth/authReducer';
import modalReducer from './slices/modal/modalReducer';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
