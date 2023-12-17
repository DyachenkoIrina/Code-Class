import { createAsyncThunk } from '@reduxjs/toolkit';
import GroupServise from '../../../services/groups';
import teacherGroupService from '../../../services/teacherGroups';

export const thunkGroupsLoad = createAsyncThunk('groupsSlise/thunkGroupsLoad', async () =>
  GroupServise.getGroups(),
);
export const thunkTeacherGroups = createAsyncThunk('groupsSlise/thunkTeacherGroups', async () =>
  teacherGroupService.getTeacherGroups(),
);
