import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, SimpleGrid, Flex, Button, Center, } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '../redux/hook';
import StudentCard from '../components/AdminAccount/StudentList';

export default function UserSelector({}: Props) {
  const userList = useAppSelector((store) => store.adminSlice.userList);
  const teachers = useAppSelector((state) => state.groupsSlice.teacherGroups)
  console.log('123', teachers)


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
                .map((group) => (
                  <li key={group.id}>{group.group}</li>
                ))}
            </ul>
            <Center>
            <Flex>
              <Button colorScheme="red" mr={2} >
                Delete
              </Button>
              <Button colorScheme="green" >
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
    </Tabs>
  );
}
