import { createAsyncThunk } from '@reduxjs/toolkit';
import TopicsService from '../../../services/topics/topicsServices';
import { TopicType } from '../../../types/topics';

const thunkLoad = createAsyncThunk('topicsSlice/thunkLoad', async () => {
  const response = await TopicsService.getTopics();
  return response;
});

const thunkAddFavoriteTopic=createAsyncThunk('topicsSlice/thunkAddFavoriteTopic', async (id: TopicType['id'])=>{
  const response = await TopicsService.AddFavoriteTopics(id);
  return response;
})

export default thunkLoad;
