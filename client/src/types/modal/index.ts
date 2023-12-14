import type { NoteType } from '../notes';

export type ModalStatetupe = {
  isOpen: boolean;
  // onClose: () => void;
  // noteId: number;
};

export type ModalAction = { type: string; payload: NoteType['id'] };
