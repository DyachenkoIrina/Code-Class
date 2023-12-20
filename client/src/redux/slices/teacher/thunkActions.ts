import { createAsyncThunk } from '@reduxjs/toolkit';
import TeacherServise from '../../../services/teacherService';
import type { TeacherType} from '../../../types/auth';


// eslint-disable-next-line import/prefer-default-export
export const thunkTeacherGroupLoad = createAsyncThunk(
  'teachersSlise/thunkTeacherGroupLoad',
  async (id: TeacherType['id']) => {
    const res = await TeacherServise.getGroups(id);
    return res;
  },
);


