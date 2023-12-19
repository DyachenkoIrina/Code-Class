import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
  } from '@chakra-ui/react'
import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { clearTeacherToDelete } from '../../redux/slices/admin/adminReducer';
import { thunkDeleteTeacher } from '../../redux/slices/groups/thunkActions';

export default function DeleteTeacherModal(): JSX.Element {

 
    const cancelRef = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();
    const teacherToDelete = useAppSelector((store) => store.adminSlice.teacherToDelete)
    function deleteHandler(): void{
      void dispatch(thunkDeleteTeacher(teacherToDelete))
      dispatch(clearTeacherToDelete())
    }
    return (
        <AlertDialog
          isOpen={!!teacherToDelete}
          leastDestructiveRef={cancelRef}
          onClose={() => dispatch(clearTeacherToDelete())}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold' >
                Удалить учителя
            </AlertDialogHeader>
              <AlertDialogBody>
                Вы уверены? Вы не сможете отменить действие после удаления.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={() => dispatch(clearTeacherToDelete())}>
                  Отменить
                </Button>
                <Button colorScheme='red' onClick={deleteHandler} ml={3}>
                  Удалить
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    )
  }