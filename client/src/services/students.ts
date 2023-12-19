import axios from 'axios';
import type { UserType } from '../types/auth';
import type { GroupType } from '../types/groups';

export const apiStudentsServise = axios.create({
  baseURL: 'http://localhost:3001/api/v1/teacherlk',
});

class StudentServise {
  static async getStudents(): Promise<UserType[]> {
    const response = await apiStudentsServise.get<UserType[]>('/students');
    if (response.status === 200) return response.data;
    return [];
  }

  static async getStudentsFilter(id: GroupType['id']): Promise<UserType[]> {
    const response = await apiStudentsServise.get<UserType[]>(`/student/${id}`);
    if (response.status === 200) return response.data;
    return [];
  }

  static async getOneStudentForTeacher(id: UserType['id']): Promise<UserType[]> {
    const response = await apiStudentsServise.get<UserType[]>(`/studentid/${id}`);
     console.log('----->class one student', response);

    if (response.status === 200) return response.data;
    return [];
  }
}
export default StudentServise;
