import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Textarea,
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
          dispatch(newTaskModal());
        }}
      >
        <ModalOverlay />
        <ModalContent class="login_modal">
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'black',
                  marginTop: '15px',
                }}
              >
                Выбор темы
              </FormLabel>
              <Input
                class="new_task_input"
                ref={initialRef}
                name="title"
                type="text"
                placeholder="Тема"
              />
            </FormControl>

            <FormControl>
              <FormLabel
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'black',
                  marginTop: '15px',
                }}
              >
                Придумай задание
              </FormLabel>
              <Textarea
                class="new_task_input"
                ref={initialRef}
                name="questions"
                placeholder="Задание"
              />
            </FormControl>

            <FormControl>
              <FormLabel
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'black',
                  marginTop: '15px',
                }}
              >
                Ответ
              </FormLabel>
              <Textarea class="new_task_input" name="answer" type="text" placeholder="Ответ" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button class="newtask_add_btn">Сохранить</Button>
            <Button class="newtask__closebtn">Выйти</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
