import { createAsyncThunk } from '@reduxjs/toolkit';
import TasksService from '../../../services/taskServices';
import type { AddTaskFormData } from '../../../types/task';

export const thunkLoadTask = createAsyncThunk('tasksSlice/thunkLoadTask', async () => {
  const response = await TasksService.getTask();
  
  return response;
});

export const thunkTaskAdd = createAsyncThunk(
  'tasksSlise/thunkTaskAdd',
  async (formData: AddTaskFormData) => TasksService.addTask(formData),
);



