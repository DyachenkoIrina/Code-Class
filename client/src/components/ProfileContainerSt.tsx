import React, { useEffect } from 'react';
import { Container, Avatar, Text, Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkOneStudentForTeacher } from '../redux/slices/students/thunkActions';
import type { UserType } from '../types/auth';
import { useParams } from 'react-router-dom';

export default function ProfileContainerSt(): JSX.Element {
  const dispatch = useAppDispatch();
  const { studentId } = useParams();
// через current Student сделать!!
  useEffect(() => {
    void dispatch(thunkOneStudentForTeacher(studentId));
  }, []);

  const user = useAppSelector((state) => state.studentsSlice.students);
  return (
    <Container
      bg="yellow"
      border="2px solid gray" // Задайте стиль, цвет и толщину границы
      borderRadius="25px" // Задайте радиус скругления углов
      p={10} // Задайте внутренний отступ
    >
      <Box textAlign="center" p={8}>
        <Avatar
          size="xl"
          name={`${user.name}`}
          //   src={user.profileImage} // Предполагается, что в user есть поле profileImageUrl с URL изображения

          mb={4}
        />
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {`${user.email}`}
        </Text>
        {/* Здесь можно добавить другие поля профиля, если они есть в объекте пользователя (user) */}
      </Box>
    </Container>
  );
}
