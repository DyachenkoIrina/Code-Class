import { createSlice } from '@reduxjs/toolkit';
import type { ModalStatetupe } from '../../../types/modal/index';
import { Action } from '@remix-run/router';

const initialState: ModalStatetupe = {
  isOpen: false,
  loginModal:false,
  groupModal:false,
  registrModal:false
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModallogin: (state, action) => {
      state.loginModal = !state.loginModal},
    groupModal: (state, action) => {
        state.groupModal = !state.groupModal},
// const type = action;
// switch(type){
//   case 'login':
// }
    //   state.loginModal= true;
    //   state.groupModal=true;
    //   state.registrModal=true;
    // },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal, closeModal, toggleModal, groupModal, openModallogin } = modalSlice.actions;

export default modalSlice.reducer;
