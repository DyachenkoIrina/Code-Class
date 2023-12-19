import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modal/modalReducer';
import topicsReducer from './slices/topics/topicsSlice';
import tasksReducer from './slices/tasks/tasksSlice';
import groupReducer from './slices/groups/groupReducer';
import studentReducer from './slices/students/studentReduser';
import authReducer from './slices/auth';
import adminReducer from './slices/admin/adminReducer';
import teacherReducer from './slices/teacher/teacherReducer';
import homeWorksReducer from './slices/homeWork/homeWorksSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    topics: topicsReducer,
    tasks: tasksReducer,
    groupsSlice: groupReducer,
    studentsSlice: studentReducer,
    authSlice: authReducer,
    adminSlice: adminReducer,
    teacherSlice: teacherReducer,
    homeWorksSlice: homeWorksReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
