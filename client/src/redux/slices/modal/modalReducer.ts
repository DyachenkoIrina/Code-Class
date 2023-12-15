import { createSlice } from '@reduxjs/toolkit';
import type { ModalStatetupe } from '../../../types/modal/index';

const initialState: ModalStatetupe = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    openModal1: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal, closeModal, toggleModal, openModal1 } = modalSlice.actions;

export default modalSlice.reducer;
