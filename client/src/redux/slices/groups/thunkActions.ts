import { createAsyncThunk } from '@reduxjs/toolkit';
import GroupServise from '../../../services/groups/groups';


export const thunkGroupsLoad = createAsyncThunk(
  'groupsSlise/thunkGroupsLoad',
  async () => GroupServise.getGroups(),
);
