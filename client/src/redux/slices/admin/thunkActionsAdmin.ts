import { createAsyncThunk } from '@reduxjs/toolkit';
import AdminService from '../../../services/adminService';

export const thunkUsersLoad = createAsyncThunk('adminSlice/thunkUsersLoad', async () =>
  AdminService.getUserList(),
);

export const thunkTeacherManages = createAsyncThunk('adminSlice/thunkTeacherManages', async (selectedTeacher) =>
  AdminService.changeGroupManage(selectedTeacher),
);

export const thunkDeleteTeacher = createAsyncThunk('adminSlice/thunkDeleteTeacher', async (teacherToDelete) =>
  AdminService.deleteTeacher(teacherToDelete),
);