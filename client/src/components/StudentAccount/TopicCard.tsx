import React from 'react';
import { Card, Heading, CardBody, CardFooter, Stack, Button, Image, Text } from '@chakra-ui/react';
import type { TopicType } from '../../types/topics/index';

type TopicTypeProps = {
  topic: TopicType;
};

export default function TopicCard({ topic }: TopicTypeProps): JSX.Element {

  console.log('_____>', topic);
  

  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={topic.img}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{topic.title}</Heading>

          <Text py="2">{topic.description}</Text>
        </CardBody>

        <CardFooter>
          <Button onClick={() => window.location.href = `/student/task/${topic.id}`} variant="solid" colorScheme="blue">
            Пройти задачи!
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
