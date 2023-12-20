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
import React from 'react';

import StudentCard from '../components/StudentCard';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import {  groupModal } from '../redux/slices/modal/modalReducer';

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
      <ModalContent class="students_list_modal">
        <ModalHeader class="login_modal_header">Список учеников группы:</ModalHeader>

        <ModalBody  pb={6}>
          {students?.map((student) => (
            <div key={student.id}>
              <StudentCard  student={student} />
            </div>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button class="student_list_btn" onClick={() => dispatch(groupModal())}>
            Выход
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
