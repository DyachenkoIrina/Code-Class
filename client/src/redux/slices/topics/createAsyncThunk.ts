import { createAsyncThunk } from '@reduxjs/toolkit';
import TopicsService from '../../../services/topics/topicsServices';
import type { TopicType } from '../../../types/topics';
import type { UserType } from '../../../types/auth';

export const thunkLoad = createAsyncThunk('topicsSlice/thunkLoad', async () => {
  const response = await TopicsService.getTopics();
  return response;
});

export const thunkAddFavoriteTopic = createAsyncThunk(
  'topicsSlice/thunkAddFavoriteTopic',
  async ({ studentId, id }: { studentId: number; id: TopicType['id'] }) => {
    const response = await TopicsService.AddFavoriteTopics(studentId, id);
    return response;
  },
);

export const thunkOneTopic = createAsyncThunk(
  'topicsSlice/thunkOneTopic',
  async (id: UserType['id']) => {
    const response = await TopicsService.getOneTopic(id);
    console.log('^^^^^^^',response)

    return response;
  },
);
