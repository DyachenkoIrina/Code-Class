import { createSlice } from '@reduxjs/toolkit';
import type { TeacherSliceState } from '../../../types/auth';
import { thunkTeacherGroupLoad } from './thunkActions';

const initialState: TeacherSliceState = {
  teacherGroups: [],
  currettask:[]
};

export const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkTeacherGroupLoad.fulfilled, (state, action) => {
      state.teacherGroups = action.payload;
    });

    // builder.addCase(thunkCheckTopic.fulfilled, (state, action) => {
    //   state.currentTask= action.payload;
    // });
  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default teacherSlice.reducer;
