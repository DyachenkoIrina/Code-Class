import { createSlice } from '@reduxjs/toolkit';
import type { StudentsSliceState } from '../../../types/student';

const initialState: StudentsSliceState = {
  students: [],
};

export const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
 
    builder.addCase(thunkNewTaskAdd.fulfilled, (state, action) => {
        state.tasks.unshift(action.payload);
      });
  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default stasksSlice.reducer;
