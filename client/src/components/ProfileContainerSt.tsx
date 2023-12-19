import React, { useEffect } from 'react';
import { Container, Avatar, Text, Box, Spacer } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkgetOneStudentForTeacher } from '../redux/slices/students/thunkActions';
import type { UserType } from '../types/auth';
import { useParams } from 'react-router-dom';
import { thunkGroupsLoad } from '../redux/slices/groups/thunkActions';
import { FormLabel } from 'react-bootstrap';

export default function ProfileContainerSt(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const student = useAppSelector((store) => store.studentsSlice.currentStudent);
  const group = useAppSelector((store) => store.groupsSlice.groups);
  // console.log('***---->container', groups );
  // console.log('****----->component', student);

  // через current Student сделать!!
  useEffect(() => {
    if (id) {
      void dispatch(thunkgetOneStudentForTeacher(id));
      void dispatch(thunkGroupsLoad());
    }
  }, [id]);

  return (
    <Container maxWidth="270px" width='auto'  bg='#D9D0FF' border="2px solid gray" borderRadius="25px" p={10}>
      <Box textAlign="center" p={8}>
        <Avatar size="xl" name={`${student?.name}`} src={student?.profileImage} />
        <Spacer h={8} />
        <FormLabel textAlign="center">Имя</FormLabel>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {`${student?.name} ${student?.lastName}`}
        </Text>

        <FormLabel textAlign="center">Почта</FormLabel>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {`${student?.email}`}
        </Text>
      </Box>
    </Container>
  );
}
