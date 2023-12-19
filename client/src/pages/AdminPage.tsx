import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, SimpleGrid, Flex, Button, Center, Checkbox, } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import StudentCard from '../components/AdminAccount/StudentList';
import { Stack } from 'react-bootstrap';
import EditTeacherModal from '../components/AdminAccount/EditTeacherModal';
import { setSelectedTeacher, setTeacherToDelete } from '../redux/slices/admin/adminReducer';
import DeleteTeacherModal from '../components/AdminAccount/DeleteTeacherModal';

export default function UserSelector({}: Props) {
  const userList = useAppSelector((store) => store.adminSlice.userList);
  const teachers = useAppSelector((state) => state.groupsSlice.teacherGroups)
  const groups = useAppSelector((state) => state.groupsSlice.groups)
  const dispatch = useAppDispatch()
  const [checkedItems, setCheckedItems] = React.useState([false, false])
  console.log(teachers)

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  const students = userList.filter((user) => user.role === 'Student');
  const applications = userList.filter((user) => user.role === 'Application');


  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab>Учителя</Tab>
        <Tab>Ученики</Tab>
        <Tab>Заявки</Tab>
      </TabList>
      <TabPanels align="center">
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
            <StudentCard key={student.id} student={student} />
                ))}
        </SimpleGrid>
        </TabPanel>
        <TabPanel>
          {applications.map((application) => (
            <Box key={application.id} p={4} borderWidth="1px" borderRadius="md">
              <Text>{`Name: ${application.name}`}</Text>
              <Text>{`Email: ${application.email}`}</Text>
              {/* Add more details if needed */}
            </Box>
          ))}
        </TabPanel>
      </TabPanels>
      <EditTeacherModal/>
      <DeleteTeacherModal/>
    </Tabs>
  );
}
