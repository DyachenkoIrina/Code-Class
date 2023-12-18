import { createAsyncThunk } from '@reduxjs/toolkit';
import TeacherServise from '../../../services/teacherService';
import type { TeacherType } from '../../../types/auth';

export const thunkTeacherGroupLoad = createAsyncThunk(
  'teachersSlise/thunkTeacherGroupLoad',
  async (id: TeacherType['id']) => {
    const res = await TeacherServise.getGroups(id);
    return res;
  },
);
