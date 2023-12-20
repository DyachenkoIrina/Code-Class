import  { createSlice } from '@reduxjs/toolkit';

import type { TaskSliceState} from '../../../types/task';
import  { thunkLoadTask, thunkTaskAdd } from './createAsyncThunk';

const initialState: TaskSliceState = {
  tasks: [],
  currentTask: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoadTask.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(thunkTaskAdd.fulfilled, (state, action) => {
      state.tasks.unshift(action.payload);
    });
  },
});

export default tasksSlice.reducer;
