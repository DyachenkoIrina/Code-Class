import axios from 'axios';
import type { GroupType } from '../types/groups';

export const apiGroupServise = axios.create({
baseURL:  `${import.meta.env.VITE_SERVER_BASEURL}adminlk/groups`,
})

class GroupServise {
  static async getGroups(): Promise<GroupType[]> {
    const response = await apiGroupServise.get<GroupType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default GroupServise;
