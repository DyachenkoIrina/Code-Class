import { createAsyncThunk } from '@reduxjs/toolkit';
import AdminService from '../../../services/adminService';
import type { TeacherGroupType } from '../../../types/admin';

export const thunkUsersLoad = createAsyncThunk('adminSlice/thunkUsersLoad', async () =>
  AdminService.getUserList(),
);

// export const thunkTeacherManages = createAsyncThunk('adminSlice/thunkTeacherManages', async (selectedTeacher: TeacherGroupType | null) =>
//   AdminService.changeGroupManage(selectedTeacher),
// );

export const thunkGroupsLoad = createAsyncThunk('adminSlice/thunkGroupsLoad', async () =>
  AdminService.getGroups(),
);