import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import QuestionContainer from '../components/TaskStudent/QuestionContainer';
import MonacoEditorContainer from '../components/TaskStudent/MonacoEditorContainer';
import { useAppSelector } from '../redux/hook';

export default function TaskPage(): JSX.Element {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const { id } = useParams();

  const currentTask = tasks.filter((task) => task.topicId === parseInt(id, 10));

  return (
    <Container centerContent>
      <Box marginTop="50px" marginBottom="50px" textAlign="center" width="200%">
        <Box>
          <QuestionContainer tasks={currentTask} />
        </Box>
        <Box marginTop="50px">
          <MonacoEditorContainer tasks={currentTask} />
        </Box>
      </Box>
    </Container>
  );
}
