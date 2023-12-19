import React, { useEffect } from 'react';
import { Container, Avatar, Text, Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkgetOneStudentForTeacher } from '../redux/slices/students/thunkActions';
import type { UserType } from '../types/auth';
import { useParams } from 'react-router-dom';

export default function ProfileContainerSt(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  //console.log('***---->container', id );
  const student = useAppSelector((state) => state.studentsSlice.currentStudent);
 // console.log('****----->component', student);

  // через current Student сделать!!
  useEffect(() => {
    if (id) {
      void dispatch(thunkgetOneStudentForTeacher(id));
    }
  }, [id]);

  return (
    <Container bg="yellow" border="2px solid gray" borderRadius="25px" p={10}>
      <Box textAlign="center" p={8}>
        <Avatar
          size="xl"
          name={`${student?.name}`}
          src={student?.profileImage}

          mb={4}
        />
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {`${student?.name} ${student?.lastName}`}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {`${student?.email}`}
        </Text>
      </Box>
    </Container>
  );
}
