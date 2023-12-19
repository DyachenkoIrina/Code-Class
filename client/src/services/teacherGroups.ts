import axios from 'axios';
import type { GroupType } from '../types/groups';

export const apiGroupServise = axios.create({
  baseURL: 'http://localhost:3001/api/v1/groupRouter',
  // VITE_SERVER_BASEURL=http://localhost:3000/api/v1/
});

class teacherGroupService {
  static async getTeacherGroups() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!+++')
    const response = await apiGroupServise.get('/');
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', response)
    if (response.status === 200) return response.data;
    return [];
  }
}

export default teacherGroupService;
