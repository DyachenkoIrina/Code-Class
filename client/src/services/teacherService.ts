import axios from 'axios';
import type { GroupType } from '../types/groups';
import type { TeacherType } from '../types/auth';

export const apiGroupServise = axios.create({
  baseURL: 'http://localhost:3001/api/v1/teacherlk',
});

class TeacherServise {
  static async getTeacher(): Promise<TeacherType[]> {
    const response = await apiGroupServise.get<TeacherType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async getGroups(): Promise<GroupType[]> {
    const response = await apiGroupServise.get<GroupType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default TeacherServise;
