import React from 'react';
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Image,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';
import type { TopicTypeCard } from '../../types/topics/index';

export default function TopicCard({ topic }: TopicTypeCard): JSX.Element {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      maxW="600px" // Установите максимальную ширину
      maxH="1500px" // Установите максимальную высоту
      p="1" // Установите внутренний отступ
      transition="transform 0.3s" // Добавляем плавный переход при изменении стилей
      _hover={{
        transform: 'scale(1.1)', // Масштабируем компонент при наведении
      }}
    >
      <Image
        objectFit="cover"
        maxW="100px"
        maxH="100px"
        // width="300px" // Установите ширину изображения
        // height="200px" // Установите высоту изображения
        src={topic.img}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody maxW="500px" maxH="10px">
          <Heading size="md">{topic.title}</Heading>
          <Text py="3">{topic.description}</Text>
        </CardBody>
        <CardFooter>
          <ButtonGroup variant="outline" spacing="6">
            <Button
              onClick={() => {
                window.location.href = `/student/task/${topic.id}`;
              }}
              variant="solid"
              colorScheme="yellow"
            >
              Пройти задачи!
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
}
