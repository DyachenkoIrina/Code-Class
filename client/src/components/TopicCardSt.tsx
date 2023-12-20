import React from 'react';
import { Card, Heading, CardBody, CardFooter, Stack, Button, Image, Text } from '@chakra-ui/react';
import type { TopicType } from '../types/topics';
import { useAppDispatch } from '../redux/hook';

type TopicTypeProps = {
  topic: TopicType;
};

export default function TopicCardSt({ topic }: TopicTypeProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Card
      style={{
        flexDirection: { base: 'column', sm: 'row' },
        overflow: 'hidden',
        border: '1px solid', // Выберите цвет границы по вашему вкусу
        borderRadius: '4px', // Выберите радиус границы по вашему вкусу
        maxWidth: '850px',
        maxHeight: '1500px',
        padding: '1',
        transition: 'transform 0.3s',
      }}
      _hover={{
        transform: 'scale(1.1)',
      }}
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW="200px"
        maxH="250px"
        // width="300px" // Установите ширину изображения
        // height="200px" // Установите высоту изображения
        src={topic?.img}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody
          style={{
            width: '300px',
            height: '200px',
            margin: '10px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <Heading size="md">{topic.title}</Heading>
          {/* <Text size="md">{topic.description}</Text> */}
          <Button>Дать задание ученику!</Button>
        </CardBody>

        {/* <Button onClick={dispatch()=>{}}>
            Дать задание ученику!
          </Button> */}
      </Stack>
    </Card>
  );
}
