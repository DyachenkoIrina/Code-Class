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
import { clearTeacherToDelete } from '../../redux/slices/admin/adminReducer';
import { thunkDeleteTeacher } from '../../redux/slices/groups/thunkActions';

export default function DeleteTeacherModal(teacher: any): any {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const dispatch = useAppDispatch();
    const teacherList = useAppSelector((state) => state.groupsSlice.teacherGroups)
    const teacherToDelete = useAppSelector((store) => store.adminSlice.teacherToDelete)
    console.log(teacherToDelete)
    function deleteHandler(){
      console.log('111111111111111111111111111',teacherToDelete)
      console.log('222222222222222222222222222222',teacherList)
      dispatch(thunkDeleteTeacher(teacherToDelete))
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