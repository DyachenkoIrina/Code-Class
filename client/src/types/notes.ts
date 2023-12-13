// Определение пользовательского типа данных NoteType

export type NoteType = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

// Определение пользовательского типа данных AddNoteFormData для формы добавления заметки
export type AddNoteFormData = {
  title: string;
  description: string;
};

// Определение пользовательского типа данных NotesState, представляющего состояние хранилища заметок, содержащего поле:
// notes (заметки) типа массива NoteType[]
export type NotesState = {
  notes: NoteType[];
};

// Определение пользовательского типа данных NotesActions, представляющего
// допустимые действия (actions) для управления состоянием хранилища заметок
export type NotesActions =
  | { type: 'SET_NOTES'; payload: NoteType[] }
  | { type: 'ADD_NOTE'; payload: NoteType }
  | { type: 'DELETE_NOTE'; payload: NoteType['id'] }
  | { type: 'EDIT_NOTE'; payload: NoteType };

export type NoteSliceState = {
  notes: NoteType[];
  favourites: NoteType[];
  currentNote: NoteType | null;
};
