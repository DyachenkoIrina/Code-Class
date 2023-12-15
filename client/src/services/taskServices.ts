import axios from 'axios';
import type { TaskType } from '../types/task';

export const apiService = axios.create({
  baseURL: 'http://localhost:3001/api/v1/task',
});

class TasksService {
  static async getTask(): Promise<TaskType[]> {
    const response = await apiService.get<TaskType[]>('/');


    if (response.status === 200) return response.data;
    return [];
  }
}

export default TasksService;
