import { Button, FormControl, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import TeacherAccountList from '../lists/TeacherAccountList';
import { useAppDispatch } from '../redux/hook';
import { newTaskModal } from '../redux/slices/modal/modalReducer';
import NewTaskFormModal from './NewTaskFormModal';
import { thunkTaskAdd } from '../redux/slices/tasks/createAsyncThunk';

export default function TeacherAccountForm(): JSX.Element {
  const { onOpen } = useDisclosure();
  const dispatch = useAppDispatch();

  const handleOpenModal = (): void => {
    dispatch(newTaskModal());
    onOpen();
  };
  return (
    <>
      <FormControl>
        <Button class="add_task_btn" onClick={handleOpenModal} type="submit">
          Создать новое задание
        </Button>
        <TeacherAccountList />
      </FormControl>
      <NewTaskFormModal />
    </>
  );
}
