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
import type { AdminStudentCard } from '../../types/admin';
import { useAppSelector } from '../../redux/hook';

export default function StudentCard({ student }: { student: AdminStudentCard }): JSX.Element {
  console.log(
    '45454545454545544444444444545444545454545454545455444444444445454445454545454545454554444444444454544454545454545454545544444444444545444545',
    student,
  );
  const groups = useAppSelector((state) => state.adminSlice.groups);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(student.Group.group || 'N/A');

  const handleGroupSelect = (group: { id: number; group?: string | undefined }): void => {
    setSelectedGroup(group.group || 'N/A');
    console.log(selectedGroup);
  };

  return (
    <Flex display="flex">
      <Card>
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
                    as={Button }
                    rightIcon={<ChevronDownIcon />}
                  >
                    {isOpen ? 'Закрыть' : 'Список групп'}
                  </MenuButton>
                  <MenuList>
                    {groups.map((group) => (
                      <MenuItem
                        key={group.id}
                        onClick={() =>
                          handleGroupSelect({ id: group.id || 0, group: group.group || 'N/A' })
                        }
                      >
                        {group.group || 'N/A'}
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
