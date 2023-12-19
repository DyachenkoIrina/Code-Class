import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
  Button,
  Center,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeCheckbox, clearSelectedTeacher } from '../../redux/slices/admin/adminReducer';
import { thunkTeacherManages } from '../../redux/slices/admin/thunkActionsAdmin';
import type { GroupType } from '../../types/groups';


export default function EditTeacherModal(): JSX.Element {
  const selectedTeacher = useAppSelector((store) => store.adminSlice.selectedTeacher);
  const dispatch = useAppDispatch();
  console.log(selectedTeacher)
  const handleCheckboxChange = (group: GroupType, id: number): void => {
    
    dispatch(changeCheckbox({selectedTeacher, group, id}))
    
  };


  return (
    <Modal isOpen={!!selectedTeacher} onClose={() => dispatch(clearSelectedTeacher())}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Teacher</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Divider />
          <Center>
            <div>{selectedTeacher?.name}</div>
          </Center>
          {selectedTeacher?.Groups.map((group:GroupType , id) => (
            <Center key={id}>
              <label>
                <input
                  type="checkbox"
                  checked={group.manages}
                  onChange={() => handleCheckboxChange(group, id)}
                />
                {group.name}
              </label>
            </Center>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={() => void dispatch(thunkTeacherManages(selectedTeacher))}>
            Сохранить изменения
          </Button>
          <Button onClick={() => dispatch(clearSelectedTeacher())}>Закрыть</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}








