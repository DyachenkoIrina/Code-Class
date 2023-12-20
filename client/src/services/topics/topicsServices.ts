import axios from 'axios';
import type { TopicType } from '../../types/topics/index';

export const apiService = axios.create({
  baseURL: 'http://localhost:3001/api/v1/topic',
});

class TopicsService {
  static async getTopics(): Promise<TopicType[]> {
    const response = await apiService.get<TopicType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async AddFavoriteTopics(id: TopicType['id']): Promise<TopicType> {
    try {
      const response = await apiService.post<TopicType>('/forUser/:id', id);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('**falied to update task**');
    } catch (error) {
      throw new Error('**server error edit task**');
    }
  }
}
export default TopicsService;
