import axios from 'axios';
import type { UserType } from '../types/auth';
import type { GroupType } from '../types/groups';

export const apiStudentsServise = axios.create({
  baseURL: 'http://localhost:3001/api/v1/teacherlk',
  // VITE_SERVER_BASEURL=http://localhost:3000/api/v1/
});

class StudentServise {
  static async getStudents(): Promise<UserType[]> {
    const response = await apiStudentsServise.get<UserType[]>('/students');
    if (response.status === 200) return response.data;
    return [];
  }

  static async getStudentsFilter(id: GroupType['id']): Promise<UserType[]> {
    const response = await apiStudentsServise.get<UserType[]>(`/students/${id}`);
    console.log('class!!', response);
    if (response.status === 200) return response.data;
    return [];
  }
}
export default StudentServise;
