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
            <ModalBody pb={6}>
            <FormControl>
                <Input ref={initialRef} name="title" type="text" placeholder="Тема" />
              </FormControl>
  
              <FormControl>
                <FormLabel>Придумай задание</FormLabel>
                <Input ref={initialRef} name="questions" type="text" placeholder="Задание" />
              </FormControl>
  
              <FormControl mt={4}>
                <Input name="password" type="answer" placeholder="Ответ" />
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
  