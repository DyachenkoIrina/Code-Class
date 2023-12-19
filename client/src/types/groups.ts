import type { TeacherGroupType } from "./admin";


export type GroupType = {
  id?: number;
  group?: string;
  teacher?: string;
  name?: string ;
  manages?: boolean;
}


export type GroupsState = {
groups: GroupType[];
};

export type GroupsSliceState = {
  groups: GroupType[];
  teacherGroups: TeacherGroupType[];
  teacherToDelete: TeacherGroupType;
}
