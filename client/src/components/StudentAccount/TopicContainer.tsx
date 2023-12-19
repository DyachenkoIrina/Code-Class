import React from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';
import TopicCard from './TopicCard';

export default function TopicContainer(): JSX.Element {
  const topics = useAppSelector((state) => state.topics.topics);

  return (
    <Container
      maxW="900px"
      bg="#D7E8D7"
      border="2px solid gray"
      borderRadius="25px"
      p={4}
      overflowY="auto" // Добавляем вертикальную прокрутку
      maxH="700px" // Ограничиваем высоту контейнера
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
        {topics.map((topic) => (
          <GridItem key={topic.id} minWidth="0" overflow="visible">
            <TopicCard topic={topic} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
