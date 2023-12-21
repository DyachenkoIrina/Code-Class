import axios from 'axios';
import type { TopicType } from '../../types/topics/index';
import type { UserType } from '../../types/auth';

export const apiService = axios.create({
  baseURL: 'http://localhost:3001/api/v1/topic',
});

class TopicsService {
  static async getTopics(): Promise<TopicType[]> {
    const response = await apiService.get<TopicType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async getOneTopic(id: UserType['id']): Promise<UserType> {
    const response = await apiService.post<UserType>('/studenttopics', {id:id});
    if (response.status === 200) return response.data;
    return [];
  }

  static async AddFavoriteTopics(studentId: number, id: TopicType['id']): Promise<TopicType> {
    try {
      const response = await apiService.post<TopicType>(`/forUser/${studentId}`, { id: id });
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
