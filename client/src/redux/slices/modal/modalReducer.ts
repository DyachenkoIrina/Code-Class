import { createSlice } from '@reduxjs/toolkit';
import type { ModalStatetupe } from '../../../types/modal/index';

const initialState: ModalStatetupe = {
  isOpen: false,
  loginModal: false,
  groupModal: false,
  newtaskModal: false,
  registrModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModallogin: (state) => {
      state.loginModal = !state.loginModal;
    },
    groupModal: (state) => {
      state.groupModal = !state.groupModal;
    },
    newTaskModal: (state) => {
      state.newtaskModal = !state.newtaskModal;
    },
    registrModal: (state) => {
      state.registrModal = !state.registrModal;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  registrModal,
  closeModal,
  toggleModal,
  groupModal,
  openModallogin,
  newTaskModal,
} = modalSlice.actions;

export default modalSlice.reducer;
