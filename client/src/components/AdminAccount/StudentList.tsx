import React from 'react';
import { Avatar, Card, CardHeader, CardBody, SimpleGrid, Heading, Text,  Button, Center } from '@chakra-ui/react';
import type { AdminStudentCard } from '../../types/admin';



export default function StudentCard({ student }: { student : AdminStudentCard}): JSX.Element {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
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
          <Heading size='md'>{student.name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>Email: {student.email}</Text>
          <Text>Название: {student.Group.group || 'N/A'}</Text>
          <Center>
            <Button>View here</Button>
          </Center>
        </CardBody>


      </Card>
    </SimpleGrid>
  );
}



