import React, { useState } from 'react';
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
import { changeCheckbox, clearSelectedTeacher, updateTeacherGroups } from '../../redux/slices/admin/adminReducer';
import { thunkTeacherManages } from '../../redux/slices/admin/thunkActionsAdmin';

export default function EditTeacherModal(): JSX.Element {
  const selectedTeacher = useAppSelector((store) => store.adminSlice.selectedTeacher);
  const groups = useAppSelector((store) => store.groupsSlice.groups);

  const dispatch = useAppDispatch();
  console.log(selectedTeacher)
  const handleCheckboxChange = (group, id): void => {
    
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
          {selectedTeacher?.Groups.map((group, id) => (
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
          <Button colorScheme="green" mr={3} onClick={() => dispatch(thunkTeacherManages(selectedTeacher))}>
            Сохранить изменения
          </Button>
          <Button onClick={() => dispatch(clearSelectedTeacher())}>Закрыть</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}








