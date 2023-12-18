import React from 'react';
import { Container } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';
import TopicCard from './TopicCard';

export default function TopicContainer(): JSX.Element {
  const topics = useAppSelector((state) => state.topics.topics);

  // const topicIdArr = new Set(topics.map((topic) => topic.id));

  return (
    <Container bg="lightblue" border="2px solid gray" borderRadius="25px" p={10}>
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </Container>
  );
}
