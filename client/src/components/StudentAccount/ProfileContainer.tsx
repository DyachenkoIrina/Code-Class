import React, { useState } from 'react';
import { Container, Avatar, Text, Box, ButtonGroup, Button, TagLabel } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';
import EditFormModal from '../../forms/EditFormModal';
import type { UserType } from '../../types/auth/index';
import { FormLabel } from 'react-bootstrap';

export default function ProfileContainer(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user);
  const [show, setShow] = useState<boolean | UserType>(false);

  return (
    <Container
      bg="#D9D0FF"
      border="2px solid gray" // Задайте стиль, цвет и толщину границы
      borderRadius="25px" // Задайте радиус скругления углов
      p={10} // Задайте внутренний отступ
      maxW="250px"
    >
      <Box textAlign="center" p={8}>
        <Avatar
          size="xl"
          name={`${user.name} ${user.name}`}
          src={`http://localhost:3001/img/${user.profileImage}`} // Предполагается, что в user есть поле profileImageUrl с URL изображения
          mb={4}
        />
        <FormLabel textAlign="center">Имя</FormLabel>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {`${user.name}`}
        </Text>
        <FormLabel textAlign="center">Почта</FormLabel>
        <Text fontSize="lg" color="gray.500" mb={4}>
          {`${user.email}`}
        </Text>
        <ButtonGroup spacing="6">
          <Button onClick={() => setShow(true)}>Редактировать</Button>
        </ButtonGroup>

        <EditFormModal show={show} setShow={setShow} />
      </Box>
    </Container>
  );
}
