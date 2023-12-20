import type { TeacherGroupType } from "./admin";


type Group = {
   group:string
  }

export type GroupType = {
  id?: number;
  group?: string;
  teacher?: string;
  name?: string ;
  manages?: boolean;
}

export type GroupCardType = {
  id?: number;
  group?: string;
  teacher?: string;
  name?: string ;
  manages?: boolean;
  groupId?: number;
  teacherId?: number;
  Group: Group
}
export type GroupsState = {
  groups: GroupType[];
};

export type GroupsSliceState = {
  groups: GroupType[];
  teacherGroups: TeacherGroupType[];
  teacherToDelete: TeacherGroupType;
}
