import { createAsyncThunk } from '@reduxjs/toolkit';
import TopicsService from '../../../services/topics/topicsServices';

const thunkLoad = createAsyncThunk('topicsSlice/thunkLoad', async () => {
  const response = await TopicsService.getTopics();
  console.log('thunkLoad', response);
  return response;
});

export default thunkLoad;
