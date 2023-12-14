import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useAppDispatch } from '../redux/hook';
import { openModal } from '../redux/slices/modal/modalReducer';
// import type { AddUserFormData } from '../types/modal/index';
import { thunkAuthSignup } from '../redux/slices/auth/createAsyncThunk';

export default function ModalFromRegistration(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleOpenModal = (): void => {
    dispatch(openModal());
    onOpen();
  };

  const onSave = (): void => {
    console.log('FormData:', formData);
    dispatch(thunkAuthSignup(formData));
    onClose(); 
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
      >
        Регистрация
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
            <form>
              <FormControl>
                <FormLabel>Имя</FormLabel>
                <Input name="name" type="text" ref={initialRef} placeholder="Имя" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Почта</FormLabel>
                <Input name="email" type="email" placeholder="email" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Пароль</FormLabel>
                <Input name="password" type="password" placeholder="Пароль" />
              </FormControl>
              <Button onClick={onSave} colorScheme="blue" type="submit" mr={3}>
                Save
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>

              <Button onClick={onClose}>Cancel</Button>


          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
