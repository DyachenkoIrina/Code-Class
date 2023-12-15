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
import { closeModal, toggleModal } from '../redux/slices/modal/modalReducer';
import { thunkLogin } from '../redux/slices/auth/createAsyncThunks';
import type { LoginFormData } from '../types/auth';

export default function LoginFormModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector((store) => store.modal.isOpen);

  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);

  return (
    <Modal onClose={() => dispatch(closeModal())} isOpen={show}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
              void dispatch(thunkLogin(formData));
              dispatch(closeModal());
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
          </form>
        </ModalBody>

        <ModalFooter>
          <Button type="submit" colorScheme="blue" mr={3}>
            Войти
          </Button>
          <Button onClick={() => dispatch(closeModal())}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
