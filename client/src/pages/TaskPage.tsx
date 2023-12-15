import React from 'react';
import { Container } from '@chakra-ui/react';
import QuestionContainer from '../components/TaskStudent/QuestionContainer';

export default function TaskPage(): JSX.Element {
  return (
    <Container>
      <QuestionContainer />
    </Container>
  );
}
