import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
  import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { thunkDeleteTeacher } from '../../redux/slices/admin/thunkActionsAdmin';
import { clearTeacherToDelete } from '../../redux/slices/admin/adminReducer';

export default function DeleteTeacherModal(teacher) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const dispatch = useAppDispatch();
    const teacherToDelete = useAppSelector((store) => store.adminSlice.teacherToDelete)
    console.log(teacher)
    // console.log(teacher)
    return (
        <AlertDialog
          isOpen={!!teacherToDelete}
          leastDestructiveRef={cancelRef}
          onClose={() => dispatch(clearTeacherToDelete())}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold' onClick={() => dispatch(thunkDeleteTeacher(teacherToDelete))}>
                Удалить учителя
            </AlertDialogHeader>
              <AlertDialogBody>
                Вы уверены? Вы не сможете отменить действие после удаления.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={() => dispatch(clearTeacherToDelete())}>
                  Отменить
                </Button>
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Удалить
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    )
  }