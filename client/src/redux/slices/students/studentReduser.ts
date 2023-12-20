import { createSlice } from '@reduxjs/toolkit';

import { thunkFilterStudentsLoad, thunkgetOneStudentForTeacher } from './thunkActions';
import type { StudentsSliceState } from '../../../types/auth';

const initialState: StudentsSliceState = {
  students: [],
  currentStudent: null,
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
      builder.addCase(thunkgetOneStudentForTeacher.fulfilled, (state, action) => {
        state.currentStudent = action.payload;
      });
    },
  });



export default studentssSlice.reducer;
