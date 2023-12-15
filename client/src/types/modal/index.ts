export type ModalStatetupe = {
  isOpen: boolean;
  loginModal: boolean;
  groupModal: boolean;
  registrModal: boolean;
  // onClose: () => void;
  // noteId: number;
};

export type ModalState =
  | { status: 'login' }
  | { status: 'group' }
  | { status: 'newTask' }
  | { status: 'registr' };

// export type ModalAction = { type: string; payload: NoteType['id'] };
