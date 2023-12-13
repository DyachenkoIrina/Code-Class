import type { NoteType } from '../notes';

export type ModalState = {
  isOpen: boolean;
  noteId: number;
};

export type ModalAction = { type: string; payload: NoteType['id'] };
