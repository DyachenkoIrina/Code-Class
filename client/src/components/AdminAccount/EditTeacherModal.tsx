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

import type { GroupType } from '../../types/groups';
import { thunkTeacherManages } from '../../redux/slices/groups/thunkActions';

export default function EditTeacherModal(): JSX.Element {
  const selectedTeacher = useAppSelector((store) => store.adminSlice.selectedTeacher);

  const dispatch = useAppDispatch();
  console.log('123123123123123123123', selectedTeacher);
  const handleCheckboxChange = (group: GroupType, id: number): void => {
    dispatch(changeCheckbox({ selectedTeacher, group, id }));
  };

  const handleEdit = () => {
    dispatch(thunkTeacherManages(selectedTeacher));
    dispatch(clearSelectedTeacher());
  };

  return (
    <Modal isOpen={!!selectedTeacher} onClose={() => dispatch(clearSelectedTeacher())}>
      <ModalOverlay />
      <ModalContent class="login_modal">
        <ModalHeader class="login_modal_header">Редактирование</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Divider />
          <Center fontWeight="600" paddingBottom="10px">
            <div>{selectedTeacher?.name}</div>
          </Center>
          {selectedTeacher?.Groups.map((group: GroupType, id) => (
            <Center paddingBottom="10px" key={id}>
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
        <ModalFooter display="flex" gap="15px">
          <Button class="save_btn" colorScheme="green" mr={3} onClick={() => handleEdit()}>
            Сохранить изменения
          </Button>
          <Button class="save_btn" onClick={() => dispatch(clearSelectedTeacher())}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
