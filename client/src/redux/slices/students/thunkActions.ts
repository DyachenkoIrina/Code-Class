import { createAsyncThunk } from '@reduxjs/toolkit';
import StudentServise from '../../../services/students';
import type { GroupType } from '../../../types/groups';
import type{ UserType } from '../../../types/auth';


export const thunkStudentsLoad = createAsyncThunk('studentsSlise/thunkStudentsLoad', async () =>
  StudentServise.getStudents(),
);

export const thunkFilterStudentsLoad = createAsyncThunk('studentsSlise/thunkFilterStudentsLoad', async (id: GroupType['id']) =>
  StudentServise.getStudentsFilter(id),
);

export const thunkgetOneStudentForTeacher = createAsyncThunk(
  'teachersSlise/thunkgetOneStudentForTeacher',
  async (id: UserType['id']) => {
    const res = await StudentServise.getOneStudentForTeacher(id);
    return res;
  },
);


