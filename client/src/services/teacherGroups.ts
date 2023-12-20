import axios from 'axios';
import { TeacherGroupArr } from '../types/admin';


export const apiGroupServise = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASEURL}groupRouter`,
  // VITE_SERVER_BASEURL=http://localhost:3000/api/v1/
});

class teacherGroupService {
  static async getTeacherGroups(): Promise<TeacherGroupArr> {
 
    const response = await apiGroupServise.get<TeacherGroupArr>('/');
    
    if (response.status === 200) return response.data;
    return [];
  }
}

export default teacherGroupService;
