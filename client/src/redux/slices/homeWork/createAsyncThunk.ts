import { createAsyncThunk } from '@reduxjs/toolkit';
import HomeWorksService from '../../../services/homeWorkService';

export const thunkLoadHomeWork = createAsyncThunk('tasksSlice/thunkLoadHomeWork', async () => {
  const response = await HomeWorksService.getHomeWork();

  return response;
});

// export const thunkTaskAdd = createAsyncThunk(
//   'tasksSlice/thunkTaskAdd',
//   async (formData: AddTaskFormData) => TasksService.addTask(formData),
// );
