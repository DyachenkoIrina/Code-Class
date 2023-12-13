import type { NoteType } from './notes';

export type AddNoteHandlerType = (event: React.FormEvent<HTMLFormElement>) => Promise<void>; // определяет новый тип данных AddNoteHandlerType.
// Этот тип представляет собой функцию, которая принимает аргумент event события формы в React (React.FormEvent<HTMLFormElement>) и возвращает объект т
// ипа Promise<void>. эта функция используется для обработки событий добавления новой заметки.

export type DeleteHandlerType = (id: NoteType['id']) => void; // Этот тип представляет собой функцию, которая принимает аргумент id типа NoteType['id'] (идентификатор заметки) и не возвращает ничего (void).
// эта функция используется для обработки событий удаления заметки.

export type EditNoteHandlerType = (id: NoteType['id'], updatedNote: NoteType) => Promise<void>; // представляет функцию, которая принимает идентификатор (id) редактируемой заметки и объект с обновленными данными (updatedNote).
// эта функция используется для редактирования заметки

export type NotesHandlersType = {
  addNoteHandler: AddNoteHandlerType;
  deleteNoteHandler: DeleteHandlerType;
  editNoteHandler: EditNoteHandlerType;
};
