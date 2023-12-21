import React, { useState } from 'react';
import { Avatar, Card, CardHeader, CardBody, SimpleGrid, Heading, Text, Button, Center, MenuButton, MenuList, Menu, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@saas-ui/core';
import type { AdminStudentCard } from '../../types/admin';
import { useAppSelector } from '../../redux/hook';

export default function StudentCard({ student }: { student: AdminStudentCard }): JSX.Element {
  const groups = useAppSelector((state) => state.adminSlice.groups);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(student.Group?.group || 'Ученик без группы');

  const handleGroupSelect = (group: { id: number; group?: string | undefined }): void => {
    setSelectedGroup(group.group || 'Ученик без группы');
    console.log(selectedGroup);
  };

  return (
    <Card>
      {/* ... (rest of the component remains the same) */}
      <CardBody>
        <Text>Email: {student.email}</Text>
        <Text>Название: {selectedGroup}</Text>
        <Center>
          <Menu>
            {({ isOpen, onClose }) => (
              <>
                <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                  {isOpen ? 'Закрыть' : 'Список групп'}
                </MenuButton>
                <MenuList>
                  {groups.map((group) => (
                    <MenuItem key={group.id} onClick={() => handleGroupSelect({ id: group.id || 0, group: group.group || 'Ученик без группы' })}>
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
  );
}




