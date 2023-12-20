import axios from 'axios';
import type { AddTaskFormData, TaskType } from '../types/task';

export const apiService = axios.create({
  baseURL: 'http://localhost:3001/api/v1/newtask',
});

class TasksService {
  static async getTask(): Promise<TaskType[]> {
    const response = await apiService.get<TaskType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addTask(taskFormData: AddTaskFormData): Promise<TaskType> {
    const response = await apiService.post<TaskType>('/', taskFormData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('**server error adding task**'));
  }
}

export default TasksService;
