import React from 'react';
import { Button, Card, CardBody, Text } from '@chakra-ui/react';
import type { UserType } from '../types/auth';

type StudentsTypeProps = {
    student: UserType;
  };
  

function StudentCard({student}:StudentsTypeProps): JSX.Element {
  console.log('!!studentcard', student)
  return (
    <Card >
      <CardBody sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text fontSize="2xl">{student.name}</Text>
        <Button>
          {/* <Button flex='1' variant='ghost' leftIcon={< />}> можно добаыить иконку */}
          Выбрать
        </Button>
      </CardBody>
    </Card>
  );
}

export default React.memo(StudentCard);
