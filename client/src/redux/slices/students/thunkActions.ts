import { createAsyncThunk } from '@reduxjs/toolkit';
import StudentServise from '../../../services/students';
import type { GroupType } from '../../../types/groups';


export const thunkStudentsLoad = createAsyncThunk('studentsSlise/thunkStudentsLoad', async () =>
  StudentServise.getStudents(),
);

export const thunkFilterStudentsLoad = createAsyncThunk('studentsSlise/thunkFilterStudentsLoad', async (id: GroupType['id']) =>
  StudentServise.getStudentsFilter(id),
);


