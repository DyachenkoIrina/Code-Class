import { createSlice } from '@reduxjs/toolkit';

import type { TaskSliceState, TaskType } from '../../../types/task';
import thunkLoadTask from './createAsyncThunk';

const initialState: TaskSliceState = {
  tasks: [],
  currentTask: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(thunkLoadTask.fulfilled, (state, action: PayloadAction<TaskType>) => {
      state.tasks = action.payload;
    });
  },
});

export default tasksSlice.reducer;
