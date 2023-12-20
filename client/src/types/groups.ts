import type { TeacherGroupType } from "./admin";
import type { TeacherType } from "./auth";

export type GroupType = {
  id: number;
  group: string;
  teacher: string;
};


export type GroupsState = {
groups: GroupType[];
};

export type GroupsSliceState = {
  groups: GroupType[];
  teacherGroups: TeacherGroupType[]
  // teacherToDelete:
};
