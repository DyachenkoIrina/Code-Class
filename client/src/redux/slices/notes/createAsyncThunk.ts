import { createAsyncThunk } from '@reduxjs/toolkit';
import NotesService from '../../../services/notes';
import type { AddNoteFormData, NoteType } from '../../../types/notes';

// Весь этот код использует асинхронные thunk-функции для взаимодействия с сервисом продуктов и обновления состояния приложения в Redux.
export const thunkNotesLoad = createAsyncThunk('notesSlice/thunkNotesLoad', async () =>
  NotesService.getNotes(),
);

export const thunkAddNote = createAsyncThunk(
  'noteSlice/thunkAddNote',
  async (formData: AddNoteFormData) => NotesService.addNote(formData),
);

export const thunkEditNote = createAsyncThunk(
  'noteSlice/thunkEditNote',
  async ({ id, formData }: { id: NoteType['id']; formData: AddNoteFormData }) =>
    NotesService.editNote(id, formData),
);

export const thunkDeleteNote = createAsyncThunk(
  'noteSlice/thunkDeleteNote',
  async (id: NoteType['id']) => {
    await NotesService.deleteNote(id);
    return id;
  },
);
