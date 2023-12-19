import { createAsyncThunk } from '@reduxjs/toolkit';
import GroupServise from '../../../services/groups';
import teacherGroupService from '../../../services/teacherGroups';
import AdminService from '../../../services/adminService';
import type{ TeacherGroupType } from '../../../types/admin';

export const thunkTeacherGroups = createAsyncThunk('groupsSlise/thunkTeacherGroups', async () =>
  teacherGroupService.getTeacherGroups(),
);

export const thunkDeleteTeacher = createAsyncThunk('groupsSlise/thunkDeleteTeacher', async (teacherToDelete: TeacherGroupType | null) =>
  AdminService.deleteTeacher(teacherToDelete),
);