import { createSlice } from '@reduxjs/toolkit';

import type { TopicSliceState, TopicType } from '../../../types/topics/index';
import { thunkAddFavoriteTopic, thunkLoad } from './createAsyncThunk';


const initialState: TopicSliceState = {
  topics: [],
  currentTopic: null,
  favoritesTopic: null,
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(thunkLoad.fulfilled, (state, action: PayloadAction<TopicType>) => {
      state.topics = action.payload;
    });
    builder.addCase(thunkAddFavoriteTopic.fulfilled, (state, action: PayloadAction<TopicType>) => {
      state.favoritesTopic = action.payload;
    });
  },
});

export default topicsSlice.reducer;
