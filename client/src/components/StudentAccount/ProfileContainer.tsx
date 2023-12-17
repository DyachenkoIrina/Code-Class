import React from 'react';
import { Container, Avatar, Text, Box } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';

export type UserType = {
    id: number;
    name: string;
    email: string;
    role:string;
    groupId:number;
  };


export default function ProfileContainer(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user);

  


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
          name={`${user.name} ${user.name}`}
          src={`http://localhost:3001/img/${user.profileImage}`} // Предполагается, что в user есть поле profileImageUrl с URL изображения

          mb={4}
        />
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {`${user.email} ${user.email}`}
        </Text>
        <Text fontSize="lg" color="gray.500" mb={4}>
          {user.groupId}
        </Text>
        {/* Здесь можно добавить другие поля профиля, если они есть в объекте пользователя (user) */}
      </Box>
    </Container>
  );
}
