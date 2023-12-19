import type { GroupType } from '../groups';

export type UserType = {
  id: number;
  profileImage?: string;
  name: string;
  email: string;
  role: string;
  groupId: number;
  lastName: string;
};

export type TeacherType = {
  id: number;
  profileImage?: string;
  name: string;
  email: string;
  role?: string;
  teacherId: number;
};

export type BackendAuth = { user: UserType; accessToken: string };

export type UserState =
  | ({ status: 'pending' } & UserType & TeacherType & { id: number })
  | ({ status: 'guest' } & UserType & TeacherType & { id: number })
  | ({ status: 'authenticated' } & UserType & TeacherType & { id: number });

// Redux Slice State
export type AuthState = {
  user: UserState;
  accessToken: string;
  teacher: UserState;
  id: number;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = {
  email: string;
  name: string;
  password: string;
};

export type StudentsSliceState = {
  students: UserType[];
  currentStudent: UserType | null;
};

export type TeacherSliceState = {
  teacherGroups: GroupType[];
};
