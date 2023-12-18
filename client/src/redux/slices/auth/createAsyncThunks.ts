import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/authService';
import type { AuthState, LoginFormData, SignupFormData } from '../../../types/auth';
import UserService from '../../../services/userService';

export const thunkCheckAuth = createAsyncThunk<AuthState>('authSlice/thunkCheckAuth', async () => {
  const backendAuth = await AuthService.check();
  return { ...backendAuth, user: { ...backendAuth.user, status: 'authenticated' } };
});

export const thunkLogin = createAsyncThunk(
  'authSlice/thunkLogin',
  async (formData: LoginFormData) => {
    const backendAuth = await AuthService.login(formData);
    console.log('backendAuth---->', backendAuth)
    return { ...backendAuth, user: { ...backendAuth.user, status: 'authenticated' } };
  },
);

export const thunkSignup = createAsyncThunk(
  'authSlice/thunkSignup',
  async (formData: SignupFormData) => {
    const backendAuth = await AuthService.signup(formData);
    return { ...backendAuth, user: { ...backendAuth.user, status: 'authenticated' } };
  },
);

export const thunkLogout = createAsyncThunk('authSlice/thunkLogout', () => AuthService.logout());

export const thunkRefreshToken = createAsyncThunk<AuthState['accessToken']>(
  'authSlice/thunkRefreshToken',
  async () => {
    const backendAuth = await AuthService.refresh();
    return backendAuth.accessToken;
  },
);

export const thunkUpdateUser = createAsyncThunk('authSlice/thunkUpdateUaser', async (data) =>
  UserService.updateUser(data),
);
