import { createSlice } from '@reduxjs/toolkit';

import { thunkFilterStudentsLoad, thunkStudentsLoad } from './thunkActions';
import type { StudentsSliceState } from '../../../types/student';

const initialState: StudentsSliceState = {
  students: [],
};

export const studentssSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(thunkStudentsLoad.fulfilled, (state, action) => {
    //   state.students = action.payload;
    // });
    builder.addCase(thunkFilterStudentsLoad.fulfilled, (state, action) => {
      state.students = action.payload;
    });
  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default studentssSlice.reducer;
