import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { openModallogin} from '../redux/slices/modal/modalReducer';
import { thunkLogin } from '../redux/slices/auth/createAsyncThunks';
import type { LoginFormData } from '../types/auth';

export default function LoginFormModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector((store) => store.modal.loginModal);

  // const handleClose = (): void => {
  //   dispatch(toggleModal());
  // };

  return (
    <Modal onClose={() => dispatch(openModallogin())} isOpen={show}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton onClick={() => dispatch(openModallogin())} />
        <ModalBody pb={6}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
              void dispatch(thunkLogin(formData));
              dispatch(openModallogin());
              // handleClose();
            }}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input name="email" type="text" placeholder="Почта" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Пароль</FormLabel>
              <Input name="password" type="text" placeholder="Почта" />
            </FormControl>
            <Button type="submit" colorScheme="blue" mr={3}>
              Войти
            </Button>
            <Button onClick={() => dispatch(openModallogin())}>Cancel</Button>
          </form>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}
