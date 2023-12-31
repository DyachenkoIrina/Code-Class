import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types/auth';
import {
  thunkCheckAuth,
  thunkLogin,
  thunkLogout,
  thunkRefreshToken,
  thunkSignup,
  thunkUpdateUser,
} from './createAsyncThunks';

const initialState: AuthState = {
  accessToken: '',
  user: {
    status: 'pending',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(thunkCheckAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkCheckAuth.rejected, (state) => {
      state.user.status = 'guest';
    });
    builder.addCase(thunkRefreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
    builder.addCase(thunkLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'authenticated' };
    });
    builder.addCase(thunkSignup.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'authenticated' };
    });
    builder.addCase(thunkLogout.fulfilled, (state, action) => {
      state.accessToken = '';
      state.user.status = 'guest';
    });
    builder.addCase(thunkUpdateUser.fulfilled, (state, action) => {
      state.user = { ...action.payload, status: 'authenticated' };
    });
  },
});

// export const {  } = authSlice.actions

export default authSlice.reducer;
