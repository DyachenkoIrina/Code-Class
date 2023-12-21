import axios from 'axios';
import type { GroupType } from '../types/groups';
import type { TeacherType, UserType } from '../types/auth';

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
    const response = await apiGroupServise.get<GroupType[]>(`/${id}`);

    if (response.status === 200) return response.data;
    return [];
  }

  static async getChekTopic(id: UserType['id']): Promise<UserType[]> {
    const response = await apiGroupServise.get<GroupType[]>(`/studentid/${id}/homework`);
    if (response.status === 200) return response.data;
    return [];
  }

  static async getTask(id: TeacherType['id']): Promise<GroupType[]> {
    const response = await apiGroupServise.get<GroupType[]>(`task/${id}`);

    if (response.status === 200) return response.data;
    return [];
  }
}

export default TeacherServise;
