import axios from 'axios';
import type { GroupType } from '../types/groups';
import type { AdminStudentCard, DataToSend, TeacherGroupType} from '../types/admin';

export const apiAdminService = axios.create({
  baseURL: 'http://localhost:3001/api/v1/adminlk',
});

interface ServerResponse {
  status: number;
  data: any;
}

class AdminService {
  static async getUserList(): Promise<AdminStudentCard[]> {
    const response = await apiAdminService.get<AdminStudentCard[]>('/');
    console.log('', response)
    if (response.status === 200) return response.data;
    return [];
  }
  
  static async changeGroupManage(selectedTeacher: null | TeacherGroupType): Promise<ServerResponse> {
    const response = await apiAdminService.post<ServerResponse>('/', selectedTeacher);
    
    if (response.status === 200) return response.data;
    return response;
  }

  static async deleteTeacher(teacherToDelete: TeacherGroupType): Promise< [] | number> {
    const response = await apiAdminService.delete(`${teacherToDelete.id}`);
    if (response.status === 200) return teacherToDelete.id;
    return [];
  }

  static async changeGroup(dataToSend: DataToSend , ): Promise< [] | number> {
    console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', dataToSend)
    const response = await apiAdminService.put('/group', dataToSend);
    if (response.status === 200) return response.data;
    return [];
  }
  
  static async giveRole(student: TeacherGroupType): Promise< [] | number> {
    const response = await apiAdminService.put('/', student);

    if (response.status === 200) return response.data;
    return [];
  }

  static async getGroups(): Promise<GroupType[]> {
    
    const response = await apiAdminService.get<GroupType[]>('/groups');
    
    if (response.status === 200) return response.data;
    return [];
  }
}
export default AdminService;
