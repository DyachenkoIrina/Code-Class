import React, { useState } from 'react';
import { Container, Avatar, Text, Box } from '@chakra-ui/react';
import { Button } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hook';
import EditFormModal from '../../forms/EditFormModal';

export type UserType = {
    id: number;
    name: string;
    email: string;
    role:string;
    groupId:number;
  };


export default function ProfileContainer(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user);
  const [show, setShow] = useState(false);

  


  return (
    <Container
      bg="#D9D0FF"
      border="2px solid gray" // Задайте стиль, цвет и толщину границы
      borderRadius="25px" // Задайте радиус скругления углов
      p={2} // Задайте внутренний отступ
      maxW="250px" 
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
        <Button  onClick={() => setShow(true)}>Редактировать</Button>
      <EditFormModal show={show} setShow={setShow} />
      </Box>
    </Container>
  );
}
