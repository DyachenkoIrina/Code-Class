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
import { useAppDispatch } from '../../redux/hook';
import { thunkDeleteTeacher } from '../../redux/slices/admin/thunkActionsAdmin';

export default function AlertDialogExample(teacher) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const dispatch = useAppDispatch();
    // console.log(teacher)

  
    return (
        <Button colorScheme='red' onClick={onOpen}>
        Удалить учителя
        </Button>

    )
  }