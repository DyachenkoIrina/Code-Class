import { createAsyncThunk } from '@reduxjs/toolkit';
import TasksService from '../../../services/taskServices';

const thunkLoadTask = createAsyncThunk('tasksSlice/thunkLoadTask', async () => {
  const response = await TasksService.getTask();
  console.log('thunkLoadTask', response);
  
  
  return response;
});

export default thunkLoadTask;
