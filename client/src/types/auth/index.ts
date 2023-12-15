export type UserType = {
  id: number;
  name: string;
  email: string;
  role:string;
  groupId:number;
};

export type BackendAuth = { user: UserType; accessToken: string };

export type UserState =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'authenticated' } & UserType);

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
