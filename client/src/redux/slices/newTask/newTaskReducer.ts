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
 
    builder.addCase(thunkNewTaskAdd.fulfilled, (state, action) => {
        state.tasks.unshift(action.payload);
      });
  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default studentssSlice.reducer;
