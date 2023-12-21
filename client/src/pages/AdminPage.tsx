import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, SimpleGrid, Flex, Button, Center, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import StudentCard from '../components/AdminAccount/StudentList';
import EditTeacherModal from '../components/AdminAccount/EditTeacherModal';
import { setSelectedTeacher, setTeacherToDelete } from '../redux/slices/admin/adminReducer';
import DeleteTeacherModal from '../components/AdminAccount/DeleteTeacherModal';
import type { UserType } from '../types/auth';
import { ChevronDownIcon } from '@saas-ui/core';
import { thunkGiveGroup, thunkGiveRole } from '../redux/slices/admin/thunkActionsAdmin';


export default function UserSelector(): JSX.Element {
  const userList= useAppSelector((store) => store.adminSlice.userList);
  const teachers = useAppSelector((state) => state.groupsSlice.teacherGroups)
  const groups= useAppSelector((state) => state.adminSlice.groups)
  const dispatch = useAppDispatch()
  


  const students = userList.filter((user: UserType):boolean => user.role === 'Student');
  const nobodies = userList.filter((user: UserType): boolean => user.role !== 'Student' && user.role !== 'Teacher' && user.role !== 'Admin');
 


  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab>Учителя</Tab>
        <Tab>Ученики</Tab>
        <Tab>Заявки</Tab>
      </TabList>
      <TabPanels textAlign="center">
      <TabPanel>
        {teachers.map((teacher) => (
        <Box key={teacher.id} p={4} borderWidth="1px" borderRadius="md">
        <Text>{`Name: ${teacher.name}`}</Text>
        <Text>{`Email: ${teacher.email}`}</Text>
        <Text>Groups:</Text>
            <ul>
              {teacher.Groups
                .map((group, id) => (
                  <li key={id}>{group.group}</li>
                ))}
            </ul>
            
            <Center>
            <Flex>
            <Button colorScheme='red' onClick={() => dispatch(setTeacherToDelete(teacher))}> 
        Удалить учителя
        </Button>
              <Button colorScheme="green" onClick={() => dispatch(setSelectedTeacher({teacher, groups}))}>
                Edit
              </Button>
            </Flex>
            </Center>
          </Box>
        ))}
      </TabPanel>

      <TabPanel>
  <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr)'>
  {students
    .filter((student) => student.role === 'Student') // Filter students with role 'student'
    .map((student) => (
      <StudentCard key={student.id} student={student} />
    ))}
</SimpleGrid>
</TabPanel>
        <TabPanel>
  {nobodies
    .map((student) => (
      <Box key={student.id} p={4} borderWidth="1px" borderRadius="md">
        <Text>{`Name: ${student.name}`}</Text>
        <Text>{`Email: ${student.email}`}</Text>

        <Center>
        <Center>
        <Button colorScheme='green' onClick={() => dispatch(thunkGiveRole(student))}> 
        Утвердить заявку
        </Button>
          </Center>
        </Center>
      </Box>
    ))}
</TabPanel>
      </TabPanels>
      <EditTeacherModal/>
      <DeleteTeacherModal/>
    </Tabs>
  );
}
