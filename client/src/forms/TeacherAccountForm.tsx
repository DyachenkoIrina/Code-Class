import { Button, FormControl, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import TeacherAccountList from '../lists/TeacherAccountList';
import { useAppDispatch } from '../redux/hook';
import { openModal } from '../redux/slices/modal/modalReducer';
import NewTaskFormModal from './NewTaskFormModal';

export default function TeacherAccountForm(): JSX.Element {
  const { onOpen } = useDisclosure();
  const dispatch = useAppDispatch();

  const handleOpenModal = (): void => {
    dispatch(openModal());

    onOpen();
  };
  return (
    <>
    <FormControl sx={{ marginTop: '20px' }}>
      <Button onClick={handleOpenModal} type="submit">
        Создать новое задание
      </Button>
      <TeacherAccountList />
    </FormControl>
    <NewTaskFormModal/>
    </>
  );
}
