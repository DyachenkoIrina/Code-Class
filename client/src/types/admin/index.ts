import type { GroupType } from "../groups";
import type { UserType} from "../auth/index";

export type UpdatedGroup = {
  name: string;
  manages: boolean;
}


export type TeacherGroupType = {
  id:number;
  name:string;
  lastName: string;
  profileImage: string;
  email:string;
  hashpass:string;
  role:string;
  groupId: number;
  Groups: GroupType[]
}
export type StudentGroupType = {
  id:number;
  name:string;
  email:string;
  hashpass:string;
  profileimage:string;
  role:string;
  Groups: GroupType[]
}

export type AdminStudentCardGroup = {
  id:number;
  group:string;
  teacher:string;
}

export type AdminStudentCard = {
  email: string;
  groupId:number;
  hashpass:string;
  id:number;
  lastName:string;
  name:string;
  profileImage:string;
  role:string;
  Group: AdminStudentCardGroup;
}



export type TeacherGroupArr = TeacherGroupType[]

export type UserListType = UserType[]

export type AdminSliceState = {
  userList: AdminStudentCard[]
  groups: GroupType[]
  teacherToDelete: null | TeacherGroupType
  selectedTeacher: null | TeacherGroupType

}


