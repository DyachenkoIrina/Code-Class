import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  SimpleGrid,
  Flex,
  Button,
  Center,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import StudentCard from '../components/AdminAccount/StudentList';
import EditTeacherModal from '../components/AdminAccount/EditTeacherModal';
import { setSelectedTeacher, setTeacherToDelete } from '../redux/slices/admin/adminReducer';
import DeleteTeacherModal from '../components/AdminAccount/DeleteTeacherModal';
import type { UserType } from '../types/auth';
import '../index.css';

export default function UserSelector(): JSX.Element {
  const userList = useAppSelector((store) => store.adminSlice.userList);
  const teachers = useAppSelector((state) => state.groupsSlice.teacherGroups);
  const groups = useAppSelector((state) => state.adminSlice.groups);
  const dispatch = useAppDispatch();
  console.log('!!!!!!!!!!!!!', teachers, groups);

  const students = userList.filter((user: UserType): boolean => user.role === 'Student');
  const applications = userList.filter((user) => user.role === 'Application');

  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList justifyContent="center" gap="50px" padding="50px 0px 30px">
        <Tab fontSize="18px">Учителя</Tab>
        <Tab fontSize="18px">Ученики</Tab>
        <Tab fontSize="18px">Заявки</Tab>
      </TabList>
      <TabPanels textAlign="center">
        <TabPanel marginLeft="120px" display="flex" gap="30px" flexWrap="wrap">
          {teachers.map((teacher) => (
            <Box maxWidth="500px" key={teacher.id} p={4} borderWidth="1px" borderRadius="20px">
              <Text fontWeight="600">{`Имя: ${teacher.name}`}</Text>
              <Text fontWeight="600">{`Почта: ${teacher.email}`}</Text>
              <Text fontWeight="600">Группы:</Text>
              <ul style={{ minHeight: '100px', listStyleType: 'none' }}>
                {teacher.Groups.map((group, id) => (
                  <li key={id}>{group.group}</li>
                ))}
              </ul>

              <Center>
                <Flex gap="30px" alignItems="center" padding="10px 0px 10px 0px">
                  <Button
                    borderRadius="20px"
                    backgroundColor="#D9D0FF"
                    _hover={{ backgroundColor: '#c3b8f7' }}
                    onClick={() => dispatch(setTeacherToDelete(teacher))}
                  >
                    Удалить учителя
                  </Button>
                  <Button
                    borderRadius="20px"
                    backgroundColor="#D7E8D7"
                    _hover={{ backgroundColor: '#b8e3b8' }}
                    onClick={() => dispatch(setSelectedTeacher({ teacher, groups }))}
                  >
                    Редактировать
                  </Button>
                </Flex>
              </Center>
            </Box>
          ))}
        </TabPanel>

        <TabPanel marginLeft="150px">
          <Box display="flex" gap="80px" flexWrap="wrap">
            {students.map(
              (student) =>
                student.Group !== null && <StudentCard key={student.id} student={student} />,
            )}
          </Box>
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
      <EditTeacherModal />
      <DeleteTeacherModal />
    </Tabs>
  );
}
