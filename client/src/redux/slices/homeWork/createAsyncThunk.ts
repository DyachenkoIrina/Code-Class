import { createAsyncThunk } from '@reduxjs/toolkit';
import HomeWorksService from '../../../services/homeWorkService';

export const thunkLoadHomeWork = createAsyncThunk('tasksSlice/thunkLoadHomeWork', async () => {
  console.log('----response----->');
  const response = await HomeWorksService.getHomeWork();
  console.log('----response----->', response);

  return response;
});

// export const thunkTaskAdd = createAsyncThunk(
//   'tasksSlice/thunkTaskAdd',
//   async (formData: AddTaskFormData) => TasksService.addTask(formData),
// );
