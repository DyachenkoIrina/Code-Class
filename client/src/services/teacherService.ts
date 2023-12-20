import axios from 'axios';
import type { GroupType } from '../types/groups';
import type { TeacherType } from '../types/auth';

export const apiGroupServise = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASEURL}teacherlk`,
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

  static async getTask(id: TeacherType['id']): Promise<GroupType[]> {
    const response = await apiGroupServise.get<GroupType[]>(`task/${id}`);

    if (response.status === 200) return response.data;
    return [];
  }
}

export default TeacherServise;
