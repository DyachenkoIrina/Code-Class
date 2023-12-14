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
import { useAppDispatch } from '../redux/hook';
import type { LoginFormData } from '../types/auth';
import { thunkAuthLogin } from '../redux/slices/auth/createAsyncThunk';

export default function LoginFormModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
        void dispatch(thunkAuthLogin(formData));
      }}
    >
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} name="email" type="text" placeholder="Почта" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Пароль</FormLabel>
              <Input name="password" type="text" placeholder="Почта" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Войти
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
}
