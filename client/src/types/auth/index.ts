export type UserType = {
  id: number;
  profileImage: string;
  name: string;
  email: string;
  role: string;
  groupId: number;
};

export type TeacherType = {
  id: number;
  avatar: string;
  name: string;
  email: string;
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
};

export type TeacherSliceState = {
  teachers: TeacherType[];
};
