import { createAsyncThunk } from '@reduxjs/toolkit';
import HomeWorksService from '../../../services/homeWorkService';
import TeacherServise from '../../../services/teacherService';
import type { UserType } from '../../../types/auth';

export const thunkLoadHomeWork = createAsyncThunk('tasksSlice/thunkLoadHomeWork', async () => {
  const response = await HomeWorksService.getHomeWork();

  return response;
});

// это не надо
// export const thunkTaskAdd = createAsyncThunk(
//   'tasksSlice/thunkTaskAdd',
//   async (formData: AddTaskFormData) => TasksService.addTask(formData),
// );

