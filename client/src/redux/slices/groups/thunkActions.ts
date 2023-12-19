import { createAsyncThunk } from '@reduxjs/toolkit';
import GroupServise from '../../../services/groups';
import teacherGroupService from '../../../services/teacherGroups';
import AdminService from '../../../services/adminService';

export const thunkTeacherGroups = createAsyncThunk('groupsSlise/thunkTeacherGroups', async () =>
  teacherGroupService.getTeacherGroups(),
);

export const thunkDeleteTeacher = createAsyncThunk('groupsSlise/thunkDeleteTeacher', async (teacherToDelete) =>
  AdminService.deleteTeacher(teacherToDelete),
);