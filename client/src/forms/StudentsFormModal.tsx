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
import { closeModal, groupModal } from '../redux/slices/modal/modalReducer';

export default function StudentFormModal(): JSX.Element {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const students = useAppSelector((state) => state.studentsSlice.students);
  const isOpen = useAppSelector((state) => state.modal.groupModal);
  const dispatch = useAppDispatch();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={() => dispatch(groupModal())}
    >
      <ModalOverlay />
      <ModalContent w="100%" h="auto" bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
        <ModalHeader>Список учеников группы:</ModalHeader>
        <ModalCloseButton onClick={() => dispatch(groupModal())} />
        <ModalBody pb={6}>
          {students?.map((student) => (
            <div key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => dispatch(groupModal())}>Выход</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
