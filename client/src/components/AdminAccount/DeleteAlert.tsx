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

export default function AlertDialogExample(teacher: any): any {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const dispatch = useAppDispatch();

  
    return (
        <Button colorScheme='red' onClick={onOpen}>
        Удалить учителя
        </Button>

    )
  }