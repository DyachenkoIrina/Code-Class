import { createAsyncThunk } from '@reduxjs/toolkit';
import StudentServise from '../../../services/students';
import type { GroupType } from '../../../types/groups';


export const thunkNewTask = createAsyncThunk('studentsSlise/thunkStudentsLoad', async () =>
  StudentServise.getStudents(),
);



