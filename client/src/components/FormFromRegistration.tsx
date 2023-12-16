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
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { closeModal, registrModal } from '../redux/slices/modal/modalReducer';
import { thunkSignup } from '../redux/slices/auth/createAsyncThunks';

export default function ModalFromRegistration(): JSX.Element {
  const { onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.registrModal);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleOpenModal = (): void => {
    dispatch(registrModal());
    onOpen();
  };

  const onSave = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
    console.log(formData);
    dispatch(thunkSignup(formData));

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
        onClick={() => dispatch(registrModal())}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton onClick={() => dispatch(registrModal())} />
          <ModalBody pb={6}>
            <form onSubmit={onSave}>
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
              <Button colorScheme="blue" type="submit" mr={3}>
                Save
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => dispatch(registrModal())}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
