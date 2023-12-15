import React from 'react';
import { Container } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';
import TaskCard from './TaskCard';

export default function TaskContainer(): JSX.Element {
  const topics = useAppSelector((state) => state.topics.topics);
  console.log('topics', topics);

  return (
    <Container
      
      bg="lightblue"
      border="2px solid gray" // Задайте стиль, цвет и толщину границы
      borderRadius="25px" // Задайте радиус скругления углов
      p={10} // Задайте внутренний отступ
    >
      {topics.map((topic) => (
        <TaskCard key={topic.id} topic={topic} />
      ))}
    </Container>
  );
}
