import axios from 'axios';
import type { HomeWorkType } from '../types/homeWork';

export const apiService = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASEURL}homework`,
});

class HomeWorksService {
  static async getHomeWork(): Promise<HomeWorkType[]> {
    const response = await apiService.get<HomeWorkType[]>('/');
    console.log('----server----->', response.data);
    
    if (response.status === 200) return response.data;
    return [];
  }
}

export default HomeWorksService;
