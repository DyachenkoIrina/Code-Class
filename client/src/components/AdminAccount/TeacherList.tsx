import React from 'react';
import { Avatar, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Flex, Button, Center } from '@chakra-ui/react';

type Student = {
  id: number;
  name: string;
  email: string;
  groupId: string;
};

type Props = {
  student: Student;
};

export default function TeacherCard({ teacher }: Props) {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card>
        <Center>
      <Avatar
          size="xl"
          name={`${teacher.name}`}
          src={`http://localhost:3001/img/${student.profileImage}`} 

          mb={4}
        />
        </Center>
        <CardHeader>
          <Heading size='md'>{teacher.name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Email: {teacher.email}</Text>
          
          <Center>
            <Button>View here</Button>
          </Center>
        </CardBody>


      </Card>
    </SimpleGrid>
  );
}