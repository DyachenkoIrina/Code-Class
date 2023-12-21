import { createSlice } from '@reduxjs/toolkit';

import type { TopicSliceState, TopicType } from '../../../types/topics/index';
import { thunkAddFavoriteTopic, thunkChekTask, thunkLoad, thunkOneTopic } from './createAsyncThunk';

const initialState: TopicSliceState = {
  topics: [],
  tasksss:[],
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
    builder.addCase(thunkOneTopic.fulfilled, (state, action: PayloadAction<TopicType>) => {
      state.topics =action.payload;
    });
   
  },
});

export default topicsSlice.reducer;
