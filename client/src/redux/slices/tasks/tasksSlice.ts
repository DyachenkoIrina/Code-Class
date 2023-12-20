import  { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TaskSliceState, TaskType } from '../../../types/task';
import  { thunkLoadTask, thunkTaskAdd } from './createAsyncThunk';

const initialState: TaskSliceState = {
  tasks: [],
  currentTask: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setCurrentTask: (state, action: PayloadAction<TaskSliceState>) => {
      state.currentTask = action.payload;
    },
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

export const { setCurrentTask } = tasksSlice.actions;

export default tasksSlice.reducer;
