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
}

export default TopicsService;
