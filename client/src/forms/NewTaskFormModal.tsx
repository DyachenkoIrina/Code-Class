import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react';
  import React from 'react';
 
import { thunkTaskAdd } from '../redux/slices/tasks/createAsyncThunk';
import type { AddTaskFormData } from '../types/task';
import { useAppDispatch } from '../redux/hook';
  
  export default function NewTaskFormModal(): JSX.Element {
    const dispatch = useAppDispatch();
    const { isOpen,  onClose } = useDisclosure();
  
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddTaskFormData;
          void dispatch(thunkTaskAdd(formData));
        }}
      >
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent w='600' h='600' bgGradient='linear(to-r, green.500, pink.200)'>
            <ModalBody pb={6}>
            <FormControl>
                <Input ref={initialRef} name="title" type="text" placeholder="Тема" />
              </FormControl>
  
              <FormControl>
                <FormLabel>Придумай задание</FormLabel>
                <Input ref={initialRef} name="questions" type="text" placeholder="Задание" />
              </FormControl>
  
              <FormControl mt={4}>
                <Input name="answer" type="text" placeholder="Ответ" />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Сохранить
              </Button>
              <Button onClick={onClose}>Выйти</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    );
  }
  