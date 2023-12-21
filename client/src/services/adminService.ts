import axios from 'axios';
import type { GroupType } from '../types/groups';
import type { AdminStudentCard, TeacherGroupType} from '../types/admin';

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
  
  static async giveRole(student: TeacherGroupType): Promise< [] | number> {
    console.log(student, 'sdfuibghjkubsdfgjkbsdfgbhjksdafgkbjsdfgbhjksdfbjgkhbksdfhjgbsfhjkbsdbhjksdf')
    const response = await apiAdminService.put('/', student);
    console.log(response, 'RESPONSERESPONSERESPONSERESPON!!!!!!!!!!!!!!!!!!!!!!!!!!SERESPONSERESPONSERESPONSERESPONSERESPONSERESPONSERESPONSE')

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
