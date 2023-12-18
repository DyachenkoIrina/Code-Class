import { createSlice } from '@reduxjs/toolkit';
import type { TeacherSliceState } from '../../../types/auth';
import { thunkTeacherGroupLoad, thunkTeacherLoad } from './thunkActions';

const initialState: TeacherSliceState = {
  // teachers: [],
  teacherGroups: [],
};

export const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(thunkTeacherGroupLoad.fulfilled, (state, action) => {
    //   state.teachers = action.payload;
    // });
    // builder.addCase(thunkTeacherGroups.fulfilled, (state, action) => {
    //   state.teacherGroups = action.payload;
    // });
    builder.addCase(thunkTeacherGroupLoad.fulfilled, (state, action) => {
      state.teacherGroups = action.payload;
    });


  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default teacherSlice.reducer;
