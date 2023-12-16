import { createSlice } from "@reduxjs/toolkit";
import type { GroupsSliceState } from "../../../types/groups";
import { thunkUsersLoad } from "./thunkActionsAdmin";


const initialState: AdminSliceState = {
  userList: [],
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkUsersLoad.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
  },
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default adminSlice.reducer;
