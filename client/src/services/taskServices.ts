import axios from 'axios';
import type { AddTaskFormData, TaskType } from '../types/task';


export const apiService = axios.create({
  baseURL: 'http://localhost:3001/api/v1/task',
});

class TasksService {
  static async getTask(): Promise<TaskType[]> {
  
    
    const response = await apiService.get<TaskType[]>('/');
    console.log('test-3');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addTask(taskFormData: AddTaskFormData): Promise<TaskType> {
    const response = await apiService.post<TaskType>('/', taskFormData);
    console.log('front ---> new task', response);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('**server error adding task**'));
  }

 
}

export default TasksService;
