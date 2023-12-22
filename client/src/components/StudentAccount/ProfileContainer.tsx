import React, { useState } from 'react';
import { Container, Avatar, Text, Box, ButtonGroup, Button, TagLabel } from '@chakra-ui/react';
import { FormLabel } from 'react-bootstrap';
import { FormLabel } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hook';
import EditFormModal from '../../forms/EditFormModal';
import type { UserType } from '../../types/auth/index';

export default function ProfileContainer(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user);
  const [show, setShow] = useState<boolean | UserType>(false);
  console.log('---------->>><>>>>>>', user);

  return (
    <Container
      bg="#D9D0FF"
      border="2px solid gray" // Задайте стиль, цвет и толщину границы
      borderRadius="25px" // Задайте радиус скругления углов
      p={10} // Задайте внутренний отступ
      maxW="250px"
      marginTop="50px"
    >
      <Box textAlign="center" p={8}>
        <Avatar
          size="xl"
          name={`${user.name} ${user.name}`}
          src={`http://localhost:3001/img/${user.profileImage}`} // Предполагается, что в user есть поле profileImageUrl с URL изображения
          mb={4}
        />

        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Привет, {user.name}!
        </Text>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {`Привет, ${user.name}!`}
        </Text>
        <FormLabel textAlign="center">Почта</FormLabel>
        <Text fontSize="lg" color="gray.500" mb={4}>
          {`Email: ${user.email}`}
        </Text>
        <Text fontSize="lg" color="gray.500" mb={4}>
          {`Ваша группа: ${user.groupId}`}
        </Text>
        <ButtonGroup spacing="6">
          <Button
            marginLeft="-22px"
            backgroundColor="#d7e8d7"
            borderRadius="20px"
            onClick={() => setShow(true)}
          >
            Редактировать
          </Button>
        </ButtonGroup>

        <EditFormModal show={show} setShow={setShow} />
      </Box>
    </Container>
  );
}
