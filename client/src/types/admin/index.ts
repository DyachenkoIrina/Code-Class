import type { GroupType } from "../groups";
import type { UserType, TeacherType } from "../auth/index";

export type UpdatedGroup = {
  name: string;
  manages: boolean;
}


export type TeacherGroupType = {
  id:number;
  name:string;
  email:string;
  hashpass:string;
  profileimage:string;
  role:string;
  Groups: GroupType[] | UpdatedGroup[]
}


export type TeacherGroupArr = TeacherGroupType[]

export type UserListType = UserType[]

export type AdminSliceState = {
  userList: UserType[]
  groups: GroupType[]
  teacherToDelete: null | TeacherGroupType
  selectedTeacher: null | TeacherGroupType

}


