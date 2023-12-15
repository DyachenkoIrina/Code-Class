import React from 'react';
import { Container } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';



export default function TaskContainer(): JSX.Element {

    const topics = useAppSelector((state) => state.topics.topics);
    console.log('topics', topics);
    


  return (
    <Container>
      {topics.map((topic) => (
        <div key={topic.id}>{topic.title}</div>
      ))}
    </Container>
     
  )
}