import type { ModalAction, ModalState } from '../../../types/modal';

const initialState = {
  isOpen: false,
  noteId: 0,
};

export default function modalReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: ModalState = initialState,
  action: ModalAction,
): ModalState {
  const { type } = action;
  switch (type) {
    case 'OPEN_MODAL':
      return { isOpen: true, noteId: action.payload };
    case 'CLOSE_MODAL':
      return initialState;
    default:
      return state;
  }
}
