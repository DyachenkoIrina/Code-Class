import { createSlice } from "@reduxjs/toolkit";
import type { GroupsSliceState } from "../../../types/groups";
import { thunkGroupsLoad } from "./thunkActions";


const initialState: GroupsSliceState = {
  groups: [],
};

export const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkGroupsLoad.fulfilled, (state, action) => {
      state.groups = action.payload;
    });
  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default groupsSlice.reducer;
