import axios from 'axios';
import type { UserType, SignupFormData } from '../types/auth';

export const apiUserService = axios.create({
  baseURL: 'http://localhost:3001',
});

class UserService {
  static async updateUser(data: SignupFormData): Promise<UserType> {

    const response = await apiUserService.post<UserType>(`/api/users/1`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
}

export default UserService;
