import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Text,
  Button,
  Center,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@saas-ui/core';
import type { AdminStudentCard, DataToSend } from '../../types/admin';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { thunkChangeGroup } from '../../redux/slices/admin/thunkActionsAdmin';

export default function StudentCard({ student }: { student: AdminStudentCard }): JSX.Element {
  const groups = useAppSelector((state) => state.adminSlice.groups);
  const [selectedGroup, setSelectedGroup] = useState<string | number|  null>(
    student.Group?.group || 'Ученик без группы',
  );
  const dispatch = useAppDispatch();



  const handleGroupSelect = (group: number): void => {
    setSelectedGroup(group.group || 'Ученик без группы');
    console.log('BEBEBEBEBEBEBEBEBEBEBBEBEBEBEBEBEBEBEBE123', group.id, student)
    const groupId: number = group.id
    const dataToSend: DataToSend = {groupId, student}
    console.log('BEBEBEBEBEBEBEBEBEBEBBEBEBEBEBEBEBEBEBE123555555555555555555555', dataToSend)
    console.log(dataToSend, 'QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ')
    dispatch(thunkChangeGroup(dataToSend)).then((data)=>console.log({data})).catch((err:any)=>console.log(err));
    console.log(group);
  };

  return (
    <Flex display="flex">
      <Card borderRadius="20px">
        <Center>
          <Avatar
            size="xl"
            name={`${student.name}`}
            src={`http://localhost:3001/img/${student.profileImage}`}
            mb={4}
          />
        </Center>
        <CardHeader>
          <Heading size="md">{student.name}</Heading>
        </CardHeader>
        <CardBody>
          <Text fontWeight="600">Email: {student.email}</Text>
          <Text fontWeight="600">Группа: {selectedGroup}</Text>
          <Center>
            <Menu>
              {({ isOpen, onClose }) => (
                <>
                  <MenuButton
                    backgroundColor="#D9D0FF"
                    _hover={{ backgroundColor: '#c3b8f7' }}
                    isActive={isOpen}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {isOpen ? 'Закрыть' : 'Список групп'}
                  </MenuButton>
                  <MenuList>
                    {groups.map((group) => (
                      <MenuItem
                        key={group.id}
                        onClick={() =>
                          handleGroupSelect(group)
                        }
                      >
                        {group.group || 'Ученик без группы'}
                      </MenuItem>
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          </Center>
        </CardBody>
      </Card>
    </Flex>
  );
}
