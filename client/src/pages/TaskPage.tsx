import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import QuestionContainer from '../components/TaskStudent/QuestionContainer';
import MonacoEditorContainer from '../components/TaskStudent/MonacoEditorContainer';

export default function TaskPage(): JSX.Element {
  return (
    <Container centerContent>
      <Box marginTop="50px" marginBottom="50px" textAlign="center" width="200%">
        <Box>
          <QuestionContainer />
        </Box>
        <Box marginTop="50px">
          <MonacoEditorContainer />
        </Box>
      </Box>
    </Container>
  );
}
