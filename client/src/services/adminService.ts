import axios from 'axios';
import type { GroupType } from '../types/groups';

export const apiAdminService = axios.create({
  baseURL: 'http://localhost:3001/api/v1/adminlk',
});

class AdminService {
  static async getUserList() {
    const response = await apiAdminService.get('/');
    if (response.status === 200) return response.data;
    return [];
  }
  
  static async changeGroupManage(selectedTeacher) {
    console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', selectedTeacher)
    const response = await apiAdminService.post('/', selectedTeacher);
    if (response.status === 200) return response.data;
    return [];
  }

  static async deleteTeacher(teacherToDelete) {
    console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', teacher)
    const response = await apiAdminService.delete('/', teacher);
    if (response.status === 200) return response.data;
    return [];
  }

}
export default AdminService;