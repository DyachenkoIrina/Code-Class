import { createSlice } from '@reduxjs/toolkit';
import type { TeacherSliceState } from '../../../types/auth';
import { thunkTeacherLoad } from './thunkActions';

const initialState: TeacherSliceState = {
  teachers: [],
  //   teacherGroups: [],
};

export const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkTeacherLoad.fulfilled, (state, action) => {
      state.teachers = action.payload;
    });
    // builder.addCase(thunkTeacherGroups.fulfilled, (state, action) => {
    //   state.teacherGroups = action.payload;
    // });
  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default teacherSlice.reducer;
