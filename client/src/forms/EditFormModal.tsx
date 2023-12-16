import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { openModallogin, userEditModal } from '../redux/slices/modal/modalReducer';
import { thunkUpdateUser } from '../redux/slices/auth/createAsyncThunks';
import type { LoginFormData } from '../types/auth';

export default function LoginFormModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector((store) => store.modal);
  const user = useAppSelector((store) => store.authSlice.user);

  return (
    <Modal onClose={() => dispatch(userEditModal())} isOpen={show}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Редактировать профиль</ModalHeader>
        <ModalCloseButton onClick={() => dispatch(userEditModal())} />
        <ModalBody pb={6}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData();
              formData.append('id', user.status === 'authenticated' ? user.id : 666) ;
              formData.append('lastName', e.currentTarget.lastName.value);
              formData.append('name', e.currentTarget.name.value);
              formData.append('profileImage', e.currentTarget.name.value);
              formData.append('email', e.currentTarget.email.value);
              formData.append('role', e.currentTarget.avatar.files[0]);

              // dispatch(thunkUpdateUser({ id: user.id, data: formData }));
              dispatch(thunkUpdateUser(formData));
              dispatch(toggleModal());
            }}
          >
            <FormControl>
              <FormLabel>Фамилия</FormLabel>
              <Input name="lastName" type="text" placeholder="Фамилия" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Имя</FormLabel>
              <Input name="name" type="text" placeholder="Имя" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Фото</FormLabel>
              <Input name="profileImage" type="text" placeholder="Фото" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Почта</FormLabel>
              <Input name="email" type="text" placeholder="Почта" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Роль</FormLabel>
              <Input name="role" type="text" placeholder="Роль" />
            </FormControl>

            <Button type="submit" colorScheme="blue" mr={3}>
              Применить
            </Button>
            <Button onClick={() => dispatch(userEditModal())}>Cancel</Button>
          </form>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}
