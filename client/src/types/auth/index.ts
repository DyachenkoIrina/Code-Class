import type { GroupType } from '../groups';

export type UserType = {
  id: number;
  profileImage?: string;
  name: string;
  email: string;
  role?: string;
  groupId: number;
};

export type TeacherType = {
  id: number;
  profileImage?: string;
  name: string;
  email: string;
  role?: string;
};

export type BackendAuth = { user: UserType; accessToken: string };

export type UserState =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'authenticated' } & UserType & TeacherType);

// Redux Slice State
export type AuthState = {
  user: UserState;
  accessToken: string;
  teacher: UserState;
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
