import {
   
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
  import React from 'react';


export default function AlertDialogExample(): JSX.Element{

    const { onOpen} = useDisclosure()

    return (
        <Button colorScheme='red' onClick={onOpen}>
        Удалить учителя
        </Button>

    )
  }