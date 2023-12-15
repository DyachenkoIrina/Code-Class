import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

import StudentCard from '../components/StudentCard';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { closeModal } from '../redux/slices/modal/modalReducer';

export default function StudentFormModal(): JSX.Element {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const students = useAppSelector((state) => state.studentsSlice.students);
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={() => dispatch(closeModal())}
    >
      <ModalOverlay />
      <ModalContent w='100%' h='auto' bgGradient='linear(to-r, green.200, pink.500)'>
        <ModalHeader>Список учеников группы:</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {/* <Grid
              sx={{
                marginTop: '70px',
                marginBottom: '100px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            > */}
          {students?.map((student) => (
            <div key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
          {/* </Grid> */}
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => dispatch(closeModal())}>Выход</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
