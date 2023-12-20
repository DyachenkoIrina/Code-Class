import { createSlice } from "@reduxjs/toolkit";
import type { GroupsSliceState } from "../../../types/groups";
import {  thunkDeleteTeacher, thunkTeacherGroups, thunkTeacherManages } from "./thunkActions";
import { thunkTeacherGroupLoad } from "../teacher/thunkActions";


const initialState: GroupsSliceState = {
  groups: [],
  teacherGroups: [],
};

export const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkTeacherGroupLoad.fulfilled, (state, action) => {
      state.groups = action.payload;
    });
    builder.addCase(thunkTeacherGroups.fulfilled, (state, action) => {
      state.teacherGroups = action.payload;
    });
    builder.addCase(thunkDeleteTeacher.fulfilled, (state, action) => {
      const updatedTeachers = state.teacherGroups.filter((el) => el.id !== action.payload)
      state.teacherGroups = updatedTeachers
    });
    builder.addCase(thunkTeacherManages.fulfilled, (state, action) => {
      console.log(action.payload , 'asdasda');
      
     state.teacherGroups = action.payload;
    });
  },
  
});

// export const { setCurrentTask, clearCurrentTask, addFavoritesTask } = tasksSlice.actions;
export default groupsSlice.reducer;
