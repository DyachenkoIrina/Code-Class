import { createSlice } from '@reduxjs/toolkit';

import type { TopicSliceState, TopicType } from '../../../types/topics/index';
import thunkLoad from './createAsyncThunk';

const initialState: TopicSliceState = {
  topics: [],
  currentTopic: null,
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(thunkLoad.fulfilled, (state, action: PayloadAction<TopicType>) => {
      state.topics = action.payload;
    });
  },
});

export default topicsSlice.reducer;
