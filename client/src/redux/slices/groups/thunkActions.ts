import { createAsyncThunk } from '@reduxjs/toolkit';
import teacherGroupService from '../../../services/teacherGroups';
import AdminService from '../../../services/adminService';
import type{ TeacherGroupType } from '../../../types/admin';

export const thunkTeacherGroups = createAsyncThunk('groupsSlise/thunkTeacherGroups', async () =>
  teacherGroupService.getTeacherGroups(),
);

export const thunkDeleteTeacher = createAsyncThunk('groupsSlice/thunkDeleteTeacher', async (teacherToDelete: TeacherGroupType | null) => {
  if (teacherToDelete !== null) {
    // Proceed with the delete operation
    return AdminService.deleteTeacher(teacherToDelete);
  } 
    return null;
  
});
