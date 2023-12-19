import axios from 'axios';
import type { GroupType } from '../types/groups';
import type { TeacherType } from '../types/auth';

export const apiGroupServise = axios.create({
  baseURL: 'http://localhost:3001/api/v1/teacherlk',
});

class TeacherServise {
  // static async getTeacher(): Promise<TeacherType[]> {
  //   const response = await apiGroupServise.get<TeacherType[]>('/');
  //   if (response.status === 200) return response.data;
  //   return [];
  // }

  static async getGroups(id: TeacherType['id']): Promise<GroupType[]> {
    console.log('****--class--> id', id)
    const response = await apiGroupServise.get<GroupType[]>(`/${id}`);
    console.log('class!----->get groups', response.data);

    if (response.status === 200) return response.data;
    return [];
  }

  static async getTask(id: TeacherType['id']): Promise<GroupType[]> {
    console.log('****--class--> id', id)
    const response = await apiGroupServise.get<GroupType[]>(`task/${id}`);
    console.log('class!----->get groups', response.data);

    if (response.status === 200) return response.data;
    return [];
  }
}

export default TeacherServise;
