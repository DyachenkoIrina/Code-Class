import axios from 'axios';
import type { AddNoteFormData, NoteType } from '../types/notes';

export const apiNotesService = axios.create({
  baseURL: 'http://localhost:3001/api/v1/notes',
});

// Класс NotesService для работы с операциями заметок
class NotesService {
  // Получение списка заметок
  static async getNotes(): Promise<NoteType[]> {
    console.log('ghjk');
    const response = await apiNotesService.get<NoteType[]>('/');
    console.log(response);

    if (response.status === 200) return response.data;
    return [];
  }

  // Добавление новой заметки
  static async addNote(noteFormData: AddNoteFormData): Promise<NoteType> {
    const response = await apiNotesService.post<NoteType>('/', noteFormData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding note'));
  }

  // Удаление заметки по идентификатору
  static async deleteNote(id: NoteType['id']): Promise<void> {
    const response = await apiNotesService.delete<NoteType>(`/${id}`);
    if (response.status === 200) return;
    return Promise.reject(new Error('Server error delete note'));
  }

  //  редактирование заметки по идентификатору
  static async editNote(id: NoteType['id'], noteFormData: AddNoteFormData): Promise<NoteType> {
    try {
      const response = await apiNotesService.put<NoteType>(`/${id}`, noteFormData);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Failed to update note');
    } catch (error) {
      throw new Error('Server error edit note');
    }
  }
}

export default NotesService;
