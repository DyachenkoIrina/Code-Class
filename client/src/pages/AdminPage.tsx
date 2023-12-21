import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, SimpleGrid, Flex, Button, Center} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import StudentCard from '../components/AdminAccount/StudentList';
import EditTeacherModal from '../components/AdminAccount/EditTeacherModal';
import { setSelectedTeacher, setTeacherToDelete } from '../redux/slices/admin/adminReducer';
import DeleteTeacherModal from '../components/AdminAccount/DeleteTeacherModal';
import type { UserType } from '../types/auth';


export default function UserSelector(): JSX.Element {
  const userList= useAppSelector((store) => store.adminSlice.userList);
  const teachers = useAppSelector((state) => state.groupsSlice.teacherGroups)
  const groups= useAppSelector((state) => state.adminSlice.groups)
  const dispatch = useAppDispatch()
 

  const students = userList.filter((user: UserType):boolean => user.role === 'Student');
  const applications = userList.filter((user) => user.role === 'Application');


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
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  {students.map((student) => (
    
    student.Group !== null && (
      <StudentCard key={student.id} student={student} />
    )
  ))}
</SimpleGrid>
        </TabPanel>
        <TabPanel>
          {applications.map((application) => (
            <Box key={application.id} p={4} borderWidth="1px" borderRadius="md">
              <Text>{`Name: ${application.name}`}</Text>
              <Text>{`Email: ${application.email}`}</Text>
            </Box>
          ))}
        </TabPanel>
      </TabPanels>
      <EditTeacherModal/>
      <DeleteTeacherModal/>
    </Tabs>
  );
}
