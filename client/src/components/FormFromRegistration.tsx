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
import { registrModal } from '../redux/slices/modal/modalReducer';
import { thunkSignup } from '../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../types/auth';

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
    void dispatch(thunkSignup(formData));

    onClose();
  };

  

  return (
    <>
      <Button
        fontWeight="400"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="#D7E8D7"
        _hover={{ background: '#D9D0FF' }}
        onClick={handleOpenModal}
        size="md"
        height="60px"
        width="280px"
        border="none"
        marginTop="20px"
      >
        Записаться на пробное занятие
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClick={() => dispatch(registrModal())}
      >
        <ModalOverlay />
        <ModalContent class="login_modal">
          <ModalHeader class="login_modal_header">
            Пожалуйста, <br /> зарегистрируйтесь
          </ModalHeader>
          <ModalCloseButton onClick={() => dispatch(registrModal())} />
          <ModalBody pb={6}>
            <form onSubmit={onSave}>
              <FormControl>
                <FormLabel>Имя</FormLabel>
                <Input
                  class="login_input"
                  name="name"
                  type="text"
                  ref={initialRef}
                  placeholder="Имя"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Почта</FormLabel>
                <Input class="login_input" name="email" type="email" placeholder="Почта" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Пароль</FormLabel>
                <Input class="login_input" name="password" type="password" placeholder="Пароль" />
              </FormControl>
              <Button class="login_btn" colorScheme="blue" type="submit" mr={3}>
                Save
              </Button>
              <Button class="login_closebtn" onClick={() => dispatch(registrModal())}>
                Cancel
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
