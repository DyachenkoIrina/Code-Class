import React from 'react';
import { Container } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';
import TopicCard from './TopicCard';

export default function TopicContainer(): JSX.Element {
  const topics = useAppSelector((state) => state.topics.topics);
  console.log('topics', topics);

  const topicIdArr = new Set(topics.map((topic) => topic.id));
  console.log('topicIdArr', topicIdArr);

  return (
    <Container
      
      bg="lightblue"
      border="2px solid gray" // Задайте стиль, цвет и толщину границы
      borderRadius="25px" // Задайте радиус скругления углов
      p={10} // Задайте внутренний отступ
    >
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </Container>
  );
}
