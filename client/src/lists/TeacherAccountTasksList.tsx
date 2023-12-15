import { Grid, Text } from '@chakra-ui/react';
import React from 'react';
import type { UserType } from '../types/auth';

type StudentsTypeProps = {
    student: UserType;
  };
  

export default function TeacherAccountTasksList({student}:StudentsTypeProps): JSX.Element {
 
  return (
    <Grid
      sx={{
        marginTop: '70px',
        marginBottom: '100px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
    <Text fontSize="2xl">{student.name}</Text>
      {tasks.map((task) => (
        <Grid key={task.id}>
          <TaskCard task={task} />
        </Grid>
      ))}
    </Grid>
  );
}