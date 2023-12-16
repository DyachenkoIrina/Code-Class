import React from 'react';
import { Button, Card, CardBody, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import type { UserType } from '../types/auth';

type StudentsTypeProps = {
    student: UserType;
  };
  

function StudentCard({student}:StudentsTypeProps): JSX.Element {

  return (
    <Card >
      <CardBody sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text fontSize="2xl">{student.name}</Text>
        <Button as={Link} to={`/teacherlk/studentid/${student.id}`}>
  Выбрать
</Button>
      </CardBody>
    </Card>
  );
}

export default React.memo(StudentCard);
