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
  Select,
} from '@chakra-ui/react';
import React from 'react';

import { thunkTaskAdd } from '../redux/slices/tasks/createAsyncThunk';
import type { AddTaskFormData } from '../types/task';
import { useAppDispatch, useAppSelector } from '../redux/hook';

import { newTaskModal } from '../redux/slices/modal/modalReducer';

export default function NewTaskFormModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.newtaskModal);
  const topics = useAppSelector((state) => state.topics.topics);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [selectedTopic, setSelectedTopic] = React.useState('');
  console.log('topics front---->', topics)

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
          console.log('formdata front---->', formData);
          // formData.topicId = selectedTopic;
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
              <Select
                class="new_task_input"
                ref={initialRef}
                name="title"
                type="text"
                placeholder="Выберите тему"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                {topics?.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.title}
                  </option>
                ))}
              </Select>
              {/* <Input
                class="new_task_input"
                ref={initialRef}
                name="title"
                type="text"
                placeholder="Тема"
              /> */}
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
            <Button type="submit" class="newtask_add_btn">
              Сохранить
            </Button>
            <Button onClick={() => dispatch(newTaskModal())} class="newtask__closebtn">
              Выйти
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
