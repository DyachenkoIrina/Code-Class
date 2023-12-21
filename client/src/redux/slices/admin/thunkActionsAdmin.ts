import { createAsyncThunk } from '@reduxjs/toolkit';
import AdminService from '../../../services/adminService';
import type { DataToSend, TeacherGroupType } from '../../../types/admin';

export const thunkUsersLoad = createAsyncThunk('adminSlice/thunkUsersLoad', async () =>
  AdminService.getUserList(),
);

// export const thunkTeacherManages = createAsyncThunk('adminSlice/thunkTeacherManages', async (selectedTeacher: TeacherGroupType | null) =>
//   AdminService.changeGroupManage(selectedTeacher),
// );

export const thunkGroupsLoad = createAsyncThunk('adminSlice/thunkGroupsLoad', async () =>
  AdminService.getGroups(),
);
export const thunkGiveRole = createAsyncThunk('adminSlice/thunkGiveRole', async (student) =>{
  const res = AdminService.giveRole(student);
  return res
  }
);

export const thunkChangeGroup = createAsyncThunk('adminSlice/thunkChangeGroup', async (dataToSend: DataToSend) =>{
  console.log('WOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLOWOLOLO')
  const res = AdminService.changeGroup(dataToSend);
  return res
  }
);
