import type { ModalAction } from '../../../types/modal';

export const openModal = (noteId: number): ModalAction => ({
  type: 'OPEN_MODAL',
  payload: noteId,
});

export const closeModal = (): ModalAction => ({
  type: 'CLOSE_MODAL',
  payload: 0,
});
