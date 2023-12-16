import { createAsyncThunk } from '@reduxjs/toolkit';
import AdminService from '../../../services/adminService';

export const thunkUsersLoad = createAsyncThunk('adminSlice/thunkUsersLoad', async () =>
  AdminService.getUserList(),
);
