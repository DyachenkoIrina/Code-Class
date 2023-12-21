import { createAsyncThunk } from '@reduxjs/toolkit';
import TeacherServise from '../../../services/teacherService';
import type { TeacherType, UserType } from '../../../types/auth';
import StudentServise from '../../../services/students';

// eslint-disable-next-line import/prefer-default-export
export const thunkTeacherGroupLoad = createAsyncThunk(
  'teachersSlise/thunkTeacherGroupLoad',
  async (id: TeacherType['id']) => {
    const res = await TeacherServise.getGroups(id);
    return res;
  },
);




