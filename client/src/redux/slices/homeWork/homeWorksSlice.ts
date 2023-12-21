import { createSlice } from '@reduxjs/toolkit';

import type { HomeWorkSliceState } from '../../../types/homeWork';
import { thunkCheckTopic, thunkLoadHomeWork } from './createAsyncThunk';

const initialState: HomeWorkSliceState = {
  homeWork: [],
  currentTask: null,
};

export const homeWorksSlice = createSlice({
  name: 'homeWork',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkLoadHomeWork.fulfilled, (state, action) => {
      state.homeWork = action.payload;
    });
    
  },
});






export default homeWorksSlice.reducer;
