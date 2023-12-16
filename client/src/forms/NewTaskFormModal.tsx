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
  ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';

import { thunkTaskAdd } from '../redux/slices/tasks/createAsyncThunk';
import type { AddTaskFormData } from '../types/task';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { closeModal, newTaskModal } from '../redux/slices/modal/modalReducer';

export default function NewTaskFormModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.newtaskModal);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={() => dispatch(newTaskModal())}
   
      
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddTaskFormData;
          void dispatch(thunkTaskAdd(formData));
        }}
      >
        <ModalOverlay />
        <ModalContent
          w="900"
          h="auto"
          bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
          sx={{
            marginTop: '150px',
          }}
        >
          <ModalBody pb={6}>
            <ModalCloseButton onClick={() => dispatch(newTaskModal())} />
            <FormControl>
              <FormLabel
                sx={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'gray.700',
                  mb: '2',
                }}
              >
                Выбор темы
              </FormLabel>
              <Input ref={initialRef} name="title" type="text" placeholder="Тема" />
            </FormControl>

            <FormControl>
              <FormLabel
                sx={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'gray.700',
                  mb: '2',
                }}
              >
                Придумай задание
              </FormLabel>
              <Input ref={initialRef} name="questions" type="text" placeholder="Задание" />
            </FormControl>

            <FormControl>
              <FormLabel
                sx={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'gray.700',
                  mb: '2',
                }}
              >
                Ответ
              </FormLabel>
              <Input name="answer" type="text" placeholder="Ответ" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              sx={{
                height: '40px',
                width: 300,
                bg: 'gray.400',
                _hover: {
                  bg: 'gray.500',
                },
              }}
              type="submit"
              mr={3}
            >
              Сохранить
            </Button>
            <Button
              sx={{
                bg: 'gray.400',
              }}
              onClick={() => dispatch(newTaskModal())}
            >
              Выйти
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
