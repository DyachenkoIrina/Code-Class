import { createSlice } from '@reduxjs/toolkit';
import type { TeacherSliceState } from '../../../types/auth';
import { thunkCheckTask, thunkTeacherGroupLoad } from './thunkActions';

const initialState: TeacherSliceState = {
  teacherGroups: [],
  taskss:[]
 
};

export const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkTeacherGroupLoad.fulfilled, (state, action) => {
      state.teacherGroups = action.payload;
    });

    builder.addCase(thunkCheckTask.fulfilled, (state, action) => {
      state.tasks= action.payload;
    });
  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default teacherSlice.reducer;
