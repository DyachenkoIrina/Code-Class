import { createSlice } from "@reduxjs/toolkit";
import type { GroupType, GroupsSliceState } from "../../../types/groups";
import { thunkDeleteTeacher, thunkGroupsLoad, thunkUsersLoad } from "./thunkActionsAdmin";
import type { AdminSliceState, TeacherGroupType } from "../../../types/admin";


const initialState: AdminSliceState = {
  userList: [],
  selectedTeacher: null,
  teacherToDelete: null,
  groups: [],
};

type SelectedTeacherType = {
  teacher: TeacherGroupType;
  groups: GroupType[]
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setSelectedTeacher: (state, action:{payload: SelectedTeacherType, type: string}) => {
      const { teacher, groups } = action.payload;
      const teacherGroupNames = teacher.Groups.map((group) => group.group)
      const groupsChecked = groups.map((group, id) => {
        if (teacherGroupNames.includes(group.group)){
          return {name: group.group, manages: true}
        }
          return {name: group.group, manages: false}
      })
      const data = {...teacher, Groups: groupsChecked}
      state.selectedTeacher = data;
    },
    changeCheckbox:(state, action) => {
      const {id} = action.payload
      state.selectedTeacher.Groups[id].manages = !state.selectedTeacher.Groups[id].manages
    },
    clearSelectedTeacher: (state) => {
      state.selectedTeacher = null;
    },
    setTeacherToDelete:(state, action) => {
      state.teacherToDelete = action.payload
    },
    clearTeacherToDelete:(state) => {
      state.teacherToDelete = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(thunkUsersLoad.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
    
    builder.addCase(thunkGroupsLoad.fulfilled, (state, action) => {
      state.groups = action.payload;
    });
  },
});

export const { setSelectedTeacher, clearSelectedTeacher, changeCheckbox, setTeacherToDelete, clearTeacherToDelete } = adminSlice.actions;
export default adminSlice.reducer;
