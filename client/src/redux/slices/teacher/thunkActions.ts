import { createAsyncThunk } from '@reduxjs/toolkit';
import TeacherServise from '../../../services/teacherService';

export const thunkTeacherLoad = createAsyncThunk('teachersSlise/thunkTeacherLoad', async () =>
  TeacherServise.getTeacher()
);
